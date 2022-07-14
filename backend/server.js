const path = require("path");
const express = require("express");
const cors = require("cors");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

// create the server
const app = express();
const port = process.env.PORT;
const host = process.env.HOST || "0.0.0.0";

// middleware
app.use(cors());
// for req.body JSON parsing
app.use(express.json());
// for req.body url-encoded parsing
app.use(express.urlencoded({ extended: false }));

const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, host, () => console.log(`Server is running on port: ${port}`));
