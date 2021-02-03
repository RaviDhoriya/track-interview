const {Jobs}=require("../model");
const {Success,Error}=require("../common/helper");

var api={};
api.getAll=(req,res)=>{
    Jobs.find((err,data)=>{
        if(err){
            res.send(Error(err));
        }else{
            res.send(Success(data));
        }
    });
}

api.jobAdd=(req,res)=>{
    var {body}=req;
    var rec=new Jobs();
    rec.name=body.name;
    rec.company=body.company;
    rec.job_url=body.job_url;
    rec.hr=body.hr;
    rec.status="applied";
    rec.source=body.source;
    rec.notes=body.notes;
    rec.skills=body.skills;
    rec.ctc_min=body.ctc_min;
    rec.ctc_max=body.ctc_max;
    rec.location=body.location;
    rec.stamp=new Date();
    rec.applied=new Date(body.applied);
    rec.save((err,data)=>{
        if(err){
            console.error(err);
            res.send(Error("Failed to add new job"));
        }else{
            res.send(Success(data,"New job added"));
        }
    });
}
module.exports=api;