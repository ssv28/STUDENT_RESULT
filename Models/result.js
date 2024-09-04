const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const stdDataSchema = new Schema({
    maths: {
        type: Number,
        required: true
    },

    english: {
        type: Number,
        required: true
    },

    gujarati: {
        type: Number,
        required: true
    },

    studentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "STUDENT"
    }

})

const RESULT = mongoose.model('RESULT', stdDataSchema);     // Create a model from the schema
module.exports = RESULT