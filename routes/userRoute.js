const users=require("../controller/userController");
const middleware=require("../controller/authMiddleware");
module.exports=(router)=>{
    router.get("/profile",middleware.validateUser,users.getProfile);
    router.post("/signup",users.signup);
    router.post("/login",users.login);
    
};
