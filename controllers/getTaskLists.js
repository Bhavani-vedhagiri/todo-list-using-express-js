const Task = require("../models/taskList");

const getTaskList = async (req, res) => {
  try {
    const getTask = await Task.find();
    res.status(200).json({ tasks: getTask });
  } catch (err) {
    res.status(500).json({ message: err.errors.name.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ message: err.errors.name.message });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: tid } = req.params;
    const task = await Task.findOne({ _id: tid });
    if (!task) {
      return res.status(404).json({ message: `Not found with id : ${tid}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
  res.json();
};
const deleteTask = async (req, res) => {
  try {
    const { id: tid } = req.params;
    const task = await Task.findOneAndDelete({ _id: tid });
    if (!task) {
      return res.status(404).json({ message: `Not found with id : ${tid}` });
    }
    //   res.status(200).json({task})
    res.status(200).json({ task: null, status: "Successfully removed" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id: tid } = req.params;
    const task = await Task.findOneAndUpdate({ _id: tid }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ message: `Not found with id : ${tid}` });
    }
    //   res.status(200).json({task})
    res.status(200).json({ task, status: "Successfully updated" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = { getTaskList, getTask, createTask, updateTask, deleteTask };
