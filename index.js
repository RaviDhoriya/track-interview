const express = require("express");
const app=express();

app.get("/api/hello",(req,res)=>{
    res.send({hello:"World"});
});

app.listen(process.env.PORT || 5001,()=>{
    console.log("Track Interview API Server started on PORT: "+ (process.env.PORT || 5001));
});