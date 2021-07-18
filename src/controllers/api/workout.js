const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  res.json(workouts);
};

const continueWorkout = async (req, res) => {
  const { id } = req.params;

  const data = await Workout.findByIdAndUpdate(id, {
    $push: {
      exercises: req.body,
    },
  });

  res.json(data);
};

const createWorkout = async (req, res) => {
  const { name, type, duration, weight, reps, sets, distance } = req.body;

  const workout = {
    day: new Date(new Date().setDate(new Date().getDate())),
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
  res.json(data);
};

module.exports = {
  getWorkouts,
  continueWorkout,
  createWorkout,
};
