
const express = require('express');
const app = express();
const cors = require('cors');
const { join } = require("path");
const path = require('path')

app.use(cors());
const { jsPDF } = require('jspdf');
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(express.json());

const https = require("https");
var fs = require('fs');

app.set("views", join(__dirname, "views"));
app.use(express.static(__dirname));

const homepage = require('./views/homepage')


app.post('/createPDF', (req, res) => {
    const doc = new jsPDF();

    let { myimg } = req.body

    doc.addImage(myimg, 0, 0);

    doc.save('/Users/avvvv/Desktop/PDFolder/myTest.pdf');
    res.status(200).send('horrayyy')
})

app.get('/downloadFile', (req, res) => {
    console.log('HIII');
    res.status(200).download('/Users/avvvv/Desktop/PDFolder/myTest.pdf')
})
app.get('/', (req, res) => {

    res.sendFile("/");
})


app.use('/homepage',homepage)

const httpsServer = https.createServer({
    key:fs.readFileSync(path.join(__dirname,'key.pem')),
    cert:fs.readFileSync(path.join(__dirname,'cert.pem'))
},app)


httpsServer.listen(443, () => {
    console.log('Server is running ...');
})