const mongoose = require("mongoose")


const password = "RoboMongo33"
const dbname = "people"
const user = "FirstUser"
const host = "cluster0.c4n9v.mongodb.net"

const uri = `mongodb+srv://${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

module.exports = mongoose.connect(uri,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false, 
        useCreateIndex: true

 })