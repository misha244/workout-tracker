const { Router } = require("express");

const {
  getWorkouts,
  continueWorkout,
  addWorkout,
  getWorkoutsInRange,
} = require("../../controllers/api/workout");

const router = Router();

router.get("/", getWorkouts);
router.post("/", addWorkout);
router.put("/:id", continueWorkout);
router.get("/range", getWorkoutsInRange);

module.exports = router;
