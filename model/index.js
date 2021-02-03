require('dotenv').config()
const mongoose=require("mongoose");
const Activity=require("./Activity");
const Jobs=require("./Jobs");
try{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser: true, useUnifiedTopology: true});
}catch(err){
    console.error("DB Connection error");
}

const db={};
db.Activity=Activity;
db.Jobs=Jobs;
module.exports=db;