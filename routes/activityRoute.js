const activities=require("../controller/activityController");

module.exports=(router)=>{
    router.post("/activities",activities.activityAdd);
    router.put("/activities",activities.activityEdit);
    router.delete("/activities",activities.activityDelete);
};
