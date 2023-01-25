const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017"

mongoose.set('strictQuery', false);


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;