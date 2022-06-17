// @desc	Get goal
// @route	GET /api/goals
// @access	Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc	Set goal
// @route	POST /api/goals
// @access	Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    // Express error handler
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal " });
};

// @desc	Delete exercise
// @route	DELETE /api/exercises/:id
// @access	Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

// @desc	Update exercises
// @route	PUT /api/exercises/:id
// @access	Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
};
