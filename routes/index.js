const router = require("express").Router();

require("./jobsRoute")(router);
require("./activityRoute")(router);
module.exports=router;