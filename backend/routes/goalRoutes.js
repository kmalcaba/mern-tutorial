const router = require("express").Router();
const {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);

router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
