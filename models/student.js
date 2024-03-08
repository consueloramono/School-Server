const mongodb = require('mongoose');

const tempSchema = new mongodb.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        required: true
    }
}, { collection: 'student' });

const temp = mongodb.model('temp', tempSchema);
module.exports = temp;