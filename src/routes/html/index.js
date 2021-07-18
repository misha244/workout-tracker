const { Router } = require("express");
const path = require("path");

const router = Router();

router.use("/workouts", workouts);

module.exports = router;
