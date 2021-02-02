const jobs=require("../controller/jobsController");

module.exports=(router)=>{
    router.get("/jobs",jobs.getAll);
    router.post("/jobs",jobs.jobAdd);
};
