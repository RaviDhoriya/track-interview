const { Jobs, Activity } = require("../model");
const { Success, Error } = require("../common/helper");

var api = {};
api.activityAdd = (req, res) => {
  var { body } = req;
  var rec = new Activity();
  rec.job_id = body.job_id;
  rec.body = body.body;
  rec.is_schedule = body.is_schedule;
  if (rec.is_schedule) {
    rec.schedule_date = new Date(body.schedule_date);
  } else {
    rec.schedule_date = null;
  }
  rec.stamp = new Date();
  console.log(body);
  console.log(rec);
  rec.save((err, activity) => {
    if (err) {
      console.error(err);
      res.send(Error("Failed to add new activity"));
    } else {
      res.send(Success(activity, "New activity created"));
    }
  });
};
api.activityDelete = (req, res) => {
  var { body } = req;

  var activity_id = body.activity_id;
  Activity.deleteOne({ _id: activity_id }, (err) => {
    if (err) {
      console.error(err);
      res.send(Error("Failed to delete activity"));
    } else {
      res.send(Success([], "Activity deleted"));
    }
  });
};
api.activityEdit = (req, res) => {
  var { body } = req;

  var activity_id = body.activity_id;
  Activity.findById(activity_id, (err, data) => {
    if (err) {
      res.send(Error("Activity post not found"));
      console.error(err);
    } else {
      var rec = data;
      rec.body = body.body;
      rec.is_schedule = body.is_schedule;
      if (rec.is_schedule) {
        rec.schedule_date = new Date(body.schedule_date);
      } else {
        rec.schedule_date = null;
      }
      rec.save((err2, activity) => {
        if (err2) {
          console.error(err2);
          res.send(Error("Failed to update activity"));
        } else {
          res.send(Success(activity, "Activity updated"));
        }
      });
    }
  });
};
module.exports = api;
