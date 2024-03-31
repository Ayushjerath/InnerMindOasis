const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const commentRoutes = require("./routes/commentRoutes");
const postRoutes = require("./routes/postRoutes");
const miscRoutes = require("./routes/miscRoutes");
const port = process.env.PORT || 3001;

connectDb();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/auth", authRoutes);
app.use("/comment", commentRoutes);
app.use("/post", postRoutes);
app.use("/misc", miscRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
