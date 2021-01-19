const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: false
    },
    createdDate : {
        type : Date,
        required : true
    },
    modifiedDate : {
        type : Date,
        required : true
    },
    reminder : {
        type: Date,
        required : false
    }
});

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;