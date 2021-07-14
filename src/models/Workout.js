const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelSchema = {
  day: Date,
  exercises: [
    {
      name: {
        type: String,
      },
      type: {
        type: String,
      },
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
    },
  ],
};
const ModelSchema = new Schema();
const ModelName = mongoose.model("ModelName", ModelSchema);
module.exports = ModelName;
