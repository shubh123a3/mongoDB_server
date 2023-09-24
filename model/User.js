const mongoose = require('mongoose')
const { Admin } = require('../config/roles_list')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username : {
    type:String ,
    require:true
    },
    roles:{
        User:{
            type:Number,
            defalut:2001
        },
        Editor:Number,
        Admin:Number
    },
    password:{
        type:String,
        require :true

    },
    refreshToken:String

});
module.exports= mongoose.model('User',userSchema)