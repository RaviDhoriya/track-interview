const activities=require("../controller/activityController");
const middleware=require("../controller/authMiddleware");
module.exports=(router)=>{
    router.post("/activities",middleware.validateUser,activities.activityAdd);
    router.put("/activities",middleware.validateUser,activities.activityEdit);
    router.delete("/activities",middleware.validateUser,activities.activityDelete);
};
