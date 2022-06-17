const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

require("dotenv").config();

// create the server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// for req.body JSON parsing
app.use(express.json());
// for req.body url-encoded parsing
app.use(express.urlencoded({ extended: false }));

const goalRoutes = require("./routes/goalRoutes");

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
