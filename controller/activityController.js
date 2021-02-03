const {Jobs,Activity}=require("../model");
const {Success,Error}=require("../common/helper");

var api={};
api.activityAdd=(req,res)=>{
    var {body}=req;
    var rec=new Activity();
    rec.job_id=body.job_id;
    rec.body=body.body;
    rec.is_schdeule=body.is_schdeule;
    if(rec.is_schdeule){
        rec.schedule_date=new Date(body.schedule_date);
    }else{
        rec.schedule_date=null;
    }
    rec.stamp=new Date();
    
    rec.save((err,activity)=>{
        if(err){
            console.error(err);
            res.send(Error("Failed to add new activity"));
        }else{
            res.send(Success(activity,"New activity created"));
        }
    });
}
api.activityDelete=(req,res)=>{
    var {body}=req;
    
    var activity_id=body.activity_id;
    Activity.deleteOne({_id:activity_id},(err)=>{
        if(err){
            console.error(err);
            res.send(Error("Failed to delete activity"));
        }else{
            res.send(Success([],"Activity deleted"));
        }
    });
}

module.exports=api;