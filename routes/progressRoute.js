const jobs=require("../controller/jobsController");

module.exports=(router)=>{
    

    router.get("/progress",jobs.getProgress);
};
