const jobs=require("../controller/jobsController");

module.exports=(router)=>{
    router.get("/jobs",jobs.getAll);
    router.get("/jobs/:job_id",jobs.getJobDetails);
    router.post("/jobs",jobs.jobAdd);
    router.put("/jobs",jobs.jobEdit);
    router.delete("/jobs",jobs.jobDelete);
};
