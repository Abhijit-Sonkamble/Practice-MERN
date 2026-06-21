const mongoose = require('mongoose');

const URI = "mongodb+srv://thelearner1326:Abhi1326@cluster0.lzegnlq.mongodb.net/Practice?appName=Cluster0"

mongoose.connect(URI).then(()=>{
    console.log("DB is connected..")
}).catch((err)=>{
    console.log("Db not connected ", err)
});