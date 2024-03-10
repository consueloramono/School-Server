const express = require("express");
const studentController = require("./controllers/studentController.js");
const homeworkController = require("./controllers/homeworkController.js");

const router = new express.Router();

router.get("/api/students", studentController.getAllStudents);
router.post("/api/students", studentController.addStudent);
router.put("/api/students/:id", studentController.updateStudent);
router.delete("/api/students/:id", studentController.deleteStudent);

router.get("/api/homeworks", homeworkController.getAllHomeworks);
router.post("/api/homeworks", homeworkController.addHomework);
router.put("/api/homeworks/:id", homeworkController.updateHomework);
router.delete("/api/homeworks/:id", homeworkController.deleteHomework);
router.get(
  "/api/homeworks/student/:studentId",
  homeworkController.getHomeworksByStudentId
);

module.exports = router;
