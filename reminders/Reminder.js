const mongoose = require('mongoose');

const remindersSchema = mongoose.Schema({
    reminder: {
        type:Date,
        required:true
    }
})

const Reminder = mongoose.model('Reminder', remindersSchema);

module.exports = Reminder;