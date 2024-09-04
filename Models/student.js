const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema

const stdDataSchema = new Schema({
    name: {
        type: String,
        require: true,
    },

    rollno: {
        type: Number,
        required: true,
        unique: true

    }



})

const STUDENT = mongoose.model('STUDENT', stdDataSchema);     // Create a model from the schema
module.exports = STUDENT