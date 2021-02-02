const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobsSchema = new Schema({
    applied: Date,
    name: String,
    company: String,
    job_url: String,
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
    location: String
});

const Jobs = mongoose.model("Jobs",jobsSchema);

module.exports=Jobs;