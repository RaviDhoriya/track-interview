const { Jobs, Activity } = require("../model");
const { Success, Error } = require("../common/helper");

var api = {};
api.getAll = (req, res) => {
  var user=req.decoded;
  Jobs.find({user_id:user._id}).sort({stamp:-1}).then((data) => {
      res.send(Success(data));
  });
};
api.getJobDetails = (req, res) => {
  var user=req.decoded;
  Jobs.find({ _id: req.params.job_id,user_id:user._id }, (err, data) => {
    if (err) {
      console.error(err);
      res.send(Error("Failed to get Job details"));
    } else {
      if (data.length > 0) {
        var op = JSON.parse(JSON.stringify(data[0]));
        Activity.find({ job_id: op._id }).sort({stamp:-1}).then((activities) => {
          op.activities = activities;
          res.send(Success(op));
        });
      } else {
        res.send(Error("Job not found"));
      }
    }
  });
};

api.jobAdd = (req, res) => {
  var { body } = req;
  var user=req.decoded;
  var rec = new Jobs();
  rec.user_id=user._id;
  rec.name = body.name;
  rec.company = body.company;
  rec.job_url = body.job_url;
  rec.review_url = body.review_url;
  rec.linkedin_url=body.linkedin_url;
  rec.hr = body.hr;
  rec.status = body.status;
  rec.source = body.source;
  rec.notes = body.notes;
  rec.skills = body.skills;
  rec.ctc_min = body.ctc_min;
  rec.ctc_max = body.ctc_max;
  rec.location = body.location;
  rec.stamp = new Date();
  rec.applied = new Date(body.applied);
  rec.save((err, data) => {
    if (err) {
      console.error(err);
      res.send(Error("Failed to add new job"));
    } else {
      res.send(Success(data, "New job added"));
    }
  });
};

api.jobEdit = (req, res) => {
  var { body } = req;
  var job_id = body.job_id;
  Jobs.findById(job_id, (err, data) => {
    if (err) {
      res.send(Error("Job post not found"));
      console.error(err);
    } else {
      var rec = data;
      rec.name = body.name;
      rec.company = body.company;
      rec.job_url = body.job_url;
      rec.review_url = body.review_url;
      rec.linkedin_url=body.linkedin_url;
      rec.hr = body.hr;
      rec.status = body.status;
      rec.source = body.source;
      rec.notes = body.notes;
      rec.skills = body.skills;
      rec.ctc_min = body.ctc_min;
      rec.ctc_max = body.ctc_max;
      rec.location = body.location;
      rec.applied = new Date(body.applied);
      rec.save((err2, data2) => {
        if (err2) {
          console.error(err2);
          res.send(Error("Failed to Edit job"));
        } else {
          res.send(Success(data2, "Job updated"));
        }
      });
    }
  });
};
api.jobDelete = (req, res) => {
  var { body } = req;
  var user=req.decoded;
  var job_id = body.job_id;

  Jobs.deleteOne({ _id: job_id,user_id:user._id }, (err) => {
    if (err) {
      console.error(err);
      res.send(Error("Failed to delete job"));
    } else {
      //delete activities as well.

      Activity.deleteMany({ job_id: job_id }, (err2, data) => {
        if (err2) {
          console.error(err2);
          res.send(Error([], "Failed to delete job"));
        } else {
          res.send(Success([], "Job post deleted"));
        }
      });
    }
  });
};
api.jobStatus=(req,res)=>{
  var {body}=req;
  var user=req.decoded;

  Jobs.find({_id:body.job_id,user_id:user._id},(err,jobs)=>{
    if(err){
      console.error(err);
      res.send(Error("Failed to change Job status"));
    }else{
      if(jobs.length===0){
        res.send(Error("Job not found"));
      }else{
        var job=jobs[0];
        job.status=body.status;
        job.save(()=>{
          res.send(Success(job, "Job status updated!"));
        });
      }
    }
  });
}
module.exports = api;
