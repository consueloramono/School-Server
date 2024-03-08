const studentTable = require('../models/student');

exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentTable.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addStudent = async (req, res) => {
  const student = new studentTable({
    name: req.body.name,
    age: req.body.age,
    class: req.body.class
  });
  try {
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStudent = async (req, res) => {
    try {
      const updatedStudent = await studentTable.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedStudent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
exports.deleteStudent = async (req, res) => {
    try {
      await studentTable.findByIdAndDelete(req.params.id);
      res.json({ message: 'Студент видалений успішно' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };