const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobsSchema = new Schema({
    user_id:{type:Schema.Types.ObjectId,ref:'User'},
    applied: Date,
    name: String,
    company: String,
    job_url: String,
    review_url: String,
    linkedin_url:String,
    hr:{
        name: String,
        email: String,
        phone: String,
    },
    status: String,
    source: String,
    notes: String,
    skills: [String],
    ctc_min: Number,
    ctc_max: Number,
    location: String,
    stamp:Date
});

const Jobs = mongoose.model("Jobs",jobsSchema);

module.exports=Jobs;