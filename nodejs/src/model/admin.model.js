const mongoose = require("mongoose");
const { type } = require("node:os");

const adminSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },

    last_name:{
        type:String,
        required: true
    },
    
    email: {
    type:String,
    required : true,
    unique : true
    },

    password: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Admin", adminSchema, "Admin")