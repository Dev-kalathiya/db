const mongoose = require('mongoose')

const user = new mongoose.Schema({
     Name: String,
     age : Number,
     phnumber: Number,

})

const modeluser = mongoose.model('User',user)

module.exports = modeluser;