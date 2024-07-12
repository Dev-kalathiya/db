const mongoose = require('mongoose')

const Database =async ()=>{
await mongoose.connect('mongodb+srv://dev:root1@cluster0.aworlz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
console.log('you are connected succesfully');
}

module.exports = Database
