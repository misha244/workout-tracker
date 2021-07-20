const { Router } = require("express");

const {
  getWorkouts,
  continueWorkout,
  createWorkout,
  getWorkoutsInRange,
} = require("../../controllers/api/workout");

const router = Router();

router.get("/", getWorkouts);
router.post("/", createWorkout);
router.put("/:id", continueWorkout);
router.get("/range", getWorkoutsInRange);

module.exports = router;
