const homeworkTable = require('../models/homework');

exports.getAllHomeworks = async (req, res) => {
  try {
    const homeworks = await homeworkTable.find();
    res.json(homeworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHomeworksByStudentId = async (req, res) => {
    const studentId = req.params.studentId;
    try {
      const homeworks = await homeworkTable.find({ studentId: studentId });
      res.json(homeworks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.addHomework = async (req, res) => {
  const homework = new homeworkTable({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    studentId: req.body.studentId
  });
  try {
    const newHomework = await homework.save();
    res.status(201).json(newHomework);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHomework = async (req, res) => {
    try {
      const updatedHomework = await homeworkTable.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedHomework);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

exports.deleteHomework = async (req, res) => {
    try {
      await homeworkTable.findByIdAndDelete(req.params.id);
      res.json({ message: 'Домашнє завдання видалене успішно' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };