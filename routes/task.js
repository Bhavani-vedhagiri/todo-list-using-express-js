const router = require("express").Router();
const {
  getTask,
  getTaskList,
  deleteTask,
  createTask,
  updateTask,
} = require("../controllers/getTaskLists");

// router.route('/').get(getTaskList)
// router.route('/').post(createTask)
// router.route('/:id').patch(updateTask)
// router.route('/:id').delete(deleteTask)
// router.route('/:id').get(getTask)SS

router.route("/").get(getTaskList).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
