const { Router } = require("express");
const { getActivities, getStats } = require("./controllers");

const router = Router();

router.get("/activities", getActivities);
router.get("/stats", getStats);

module.exports = router;
