const {Jobs}=require("../model");
const {Success,Error}=require("../common/helper");

var api={};
api.getAll=(req,res)=>{
    Jobs.find((err,data)=>{
        if(err){
            console.error(err);
            res.send(Error("Failed to get Jobs"));
        }else{
            res.send(Success(data));
        }
    });
}
api.getJobDetails=(req,res)=>{
    Jobs.find({_id:req.params.job_id},(err,data)=>{
        if(err){
            console.error(err);
            res.send(Error("Failed to get Job details"));
        }else{
            res.send(Success(data[0]));
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

api.jobEdit=(req,res)=>{
    var {body}=req;
    
    var job_id=body.job_id;
    Jobs.findById(job_id,(err,data)=>{
        if(err){
            res.send(Error("Job post not found"));
            console.error(err);
        }else{
            var rec=data;
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
            rec.applied=new Date(body.applied);
            rec.save((err2,data2)=>{
                if(err2){
                    console.error(err2);
                    res.send(Error("Failed to Edit job"));
                }else{
                    res.send(Success(data2,"Job updated"));
                }
            });
        }
    });
}
api.jobDelete=(req,res)=>{
    var {body}=req;
    
    var job_id=body.job_id;
    Jobs.deleteOne({_id:job_id},(err)=>{
        if(err){
            console.error(err);
            res.send(Error("Failed to delete job"));
        }else{
            res.send(Success([],"Job post deleted"));
        }
    });
}
module.exports=api;