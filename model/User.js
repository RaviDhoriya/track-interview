const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:String,
    email:String,
    password:String,
    last_login:Date,
    stamp:Date,
});

const User=mongoose.model('User',userSchema);

module.exports=User;