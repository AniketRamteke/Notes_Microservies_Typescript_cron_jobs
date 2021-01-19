const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let Reminder = require('./Reminder');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI

mongoose.connect("mongodb+srv://Aniket_DB:Hakuna@8551@cluster0.scs3s.mongodb.net/newReminders?retryWrites=true&w=majority",
{ useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology:true },
() => {
    console.log("Database connected");
})

app.get('/',(req,res) => {
    Reminder.find()
    .then(reminder => res.json(reminder))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/add', (req, res) => {
    const reminder = req.body.reminder;

    const newReminder = new Reminder({
        reminder
    });
    console.log(req.body);

    newReminder.save()
    .then(() => res.json(`A new reminder: '${newReminder.reminder}' has been created!`))
    .catch(err => res.status(400).json('Error: ' + err));
})

app.listen(4000);




