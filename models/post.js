const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    course_length: {
        type: Number,
        required: true
    },
    Name:{
        type: String,
        required: true
    },
    certification: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

const Data  = mongoose.model('Data', postSchema);

module.exports = {Data};