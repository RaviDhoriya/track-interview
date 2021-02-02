const express = require("express");
const bodyparser=require("body-parser");
const cors=require("cors");

const app=express();
app.use(bodyparser.json());
app.use(express.static(__dirname+"/public"));
app.use(cors());

app.use("/api",require("./routes"));

app.get("/",(req,res)=>{
    res.render("index.html");
});

app.listen(process.env.PORT || 5001,()=>{
    console.log("Track Interview API Server started on PORT: "+ (process.env.PORT || 5001));
});