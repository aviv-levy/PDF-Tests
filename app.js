
const express = require('express');
const app = express();
const cors = require('cors');
const { join } = require("path");

app.use(cors());
const { jsPDF } = require('jspdf');
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(express.json());

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

app.listen(3000, () => {
    console.log('Server is running ...');
})