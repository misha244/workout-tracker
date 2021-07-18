const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes/index");

const PORT = process.env.PORT || 3000;

const DB_NAME = process.env.DB_NAME || "workout";

const DB_URL = `mongodb://localhost/${DB_NAME}` || process.env.MONGODB_URI;

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const app = express();
app.use(express.static(path.join(__dirname, "./src/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./src/public"));

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
