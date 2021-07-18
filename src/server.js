const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const DB_NAME = process.env.DB_NAME || "workout";

const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

const MONGOOSE_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on  http://localhost:${PORT}`);
});
