const { Router } = require("express");
const { getActivities } = require("./controllers");

const router = Router();

router.get("/activities", getActivities);

module.exports = router;
