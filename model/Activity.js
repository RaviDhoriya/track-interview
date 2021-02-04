const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const activitySchema=new Schema({
    job_id:{type:Schema.Types.ObjectId,ref:'Jobs'},
    stamp:Date,
    body:String,
    is_schedule:Boolean,
    schedule_date:Date,
    schedule_done:Boolean 
});

const Activity=mongoose.model("Activity",activitySchema);
module.exports=Activity;