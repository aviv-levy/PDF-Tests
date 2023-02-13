const Router = require("express").Router();

Router.get('/', (req,res)=>{
    res.sendFile('/Users/avvvv/Desktop/PDF- Nodejs/PDF-Tests/views/index.html')
})



module.exports = Router;