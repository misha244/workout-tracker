const { Workout } = require("../../models");

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (error) {
    console.log(error);
  }
};

const continueWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Workout.findByIdAndUpdate(id, {
      $push: {
        exercises: req.body,
      },
    });

    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const createWorkout = async (req, res) => {
  const { name, type, duration, weight, reps, sets, distance } = req.body;
  try {
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
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getWorkouts,
  continueWorkout,
  createWorkout,
};
