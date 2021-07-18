const { Workout } = require("../../models");

const getWorkouts = async () => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

const continueWorkout = async () => {};

const createWorkout = async () => {
  const { name, type, duration, weight, reps, sets, distance } = req.body;

  const workout = {
    day: new Date(),
    exercises: [
      {
        name,
        type,
        duration,
        weight,
        reps,
        sets,
        distance,
      },
    ],
  };

  const data = await Workout.create(workout);
  res.json(workout);
};

module.exports = {
  getWorkouts,
  continueWorkout,
  createWorkout,
};
