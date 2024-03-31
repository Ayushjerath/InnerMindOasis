const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const port = process.env.PORT || 3001;

connectDb();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
