const express = require("express");
const cors = require("cors")

//Database connected
require("./config/db.config")

const app = express();
const PORT = 8000;

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true})) // he je varcche 2 aahe te route chya pahile lagle ch pahije nahitr data share hot nahi

app.use("/api", require("./routes/index"));



app.listen(PORT, (err)=>{
    if (err) {
        console.log("Error in server : ", err)
        return false;
    }
    console.log("Started.....");

})