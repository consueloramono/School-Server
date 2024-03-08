const mongodb = require('mongoose');

const homeworkSchema = new mongodb.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },

  studentId: {
    type: mongodb.Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
},{ collection: 'homework' });

const homeworkTable = mongodb.model('homeworkTable', homeworkSchema);
module.exports = homeworkTable;