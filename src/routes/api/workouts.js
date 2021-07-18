const { Router } = require("express");

const {
  getWorkouts,
  continueWorkout,
  createWorkout,
} = require("../../controllers/api/workout");

const router = Router();

router.get("/", getWorkouts);
router.post("/", createWorkout);
router.put("/:id", continueWorkout);

module.exports = router;
