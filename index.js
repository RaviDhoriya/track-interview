const express = require("express");
const app=express();

app.use(express.static(__dirname+"/public"));

app.get("/api/hello",(req,res)=>{
    res.send({hello:"World"});
});
app.get("/",(req,res)=>{
    res.render("index.html");
});

app.listen(process.env.PORT || 5001,()=>{
    console.log("Track Interview API Server started on PORT: "+ (process.env.PORT || 5001));
});