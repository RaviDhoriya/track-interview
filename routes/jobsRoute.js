const jobs=require("../controller/jobsController");
const middleware=require("../controller/authMiddleware");
module.exports=(router)=>{
    router.get("/jobs/stats",middleware.validateUser,jobs.getStats);
    router.post("/jobs",middleware.validateUser,jobs.getAll);
    router.get("/jobs/:job_id",middleware.validateUser,jobs.getJobDetails);
    router.post("/jobs",middleware.validateUser,jobs.jobAdd);
    router.put("/jobs",middleware.validateUser,jobs.jobEdit);
    router.delete("/jobs",middleware.validateUser,jobs.jobDelete);
    router.post("/jobs/:job_id",middleware.validateUser,jobs.jobStatus);
};
