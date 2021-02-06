const router = require("express").Router();
require("./userRoute")(router);
require("./jobsRoute")(router);
require("./activityRoute")(router);
module.exports=router;