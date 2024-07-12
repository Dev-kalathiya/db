const express = require('express');
const Database = require('./config/db');
const modeluser = require('./models/usershcema');
const APP = express();
APP.use (express.json())

APP.get('/', async(req, res) => {
   let data1 = await modeluser.find()
   res.send(data1);
});

APP.post('/', async(req,res) => {

    let data = await modeluser.create(req.body)
    console.log(req.body);
    res.send (data)
    
})

APP.delete ('/:id', async(req, res) => {

    let id = req.params.id;
    
    let data = await modeluser.findByIdAndDelete(id);
    res.send('data is deleted');

})
APP.listen(8090,()=> {
    console.log('your server is starting 8090')
    Database();
})


