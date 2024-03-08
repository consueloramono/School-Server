const express = require('express');
const path = require('path')
const app = express();
const mongoose = require('mongoose');
const studentTable = require('./models/student');
const homeworkTable = require('./models/homework');
const studentController = require('./controllers/studentController');
const homeworkController = require('./controllers/homeworkController');

const PORT = 3000;

const url = "mongodb+srv://root:root@schooldb.v3xhgjj.mongodb.net/?retryWrites=true&w=majority&appName=SchoolDB";

app.use(express.json());

mongoose
  .connect(url)
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log("DB ERROR", err));


app.get('/', async (req, res) => {
 
});

app.get('/api/students', studentController.getAllStudents);
app.post('/api/students', studentController.addStudent);
app.put('/api/students/:id', studentController.updateStudent);
app.delete('/api/students/:id', studentController.deleteStudent);

app.get('/api/homeworks', homeworkController.getAllHomeworks);
app.post('/api/homeworks', homeworkController.addHomework);
app.put('/api/homeworks/:id', homeworkController.updateHomework);
app.delete('/api/homeworks/:id', homeworkController.deleteHomework);
app.get('/api/homeworks/student/:studentId', homeworkController.getHomeworksByStudentId);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) ;