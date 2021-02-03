const activities=require("../controller/activityController");

module.exports=(router)=>{
    router.post("/activities",activities.activityAdd);
};
