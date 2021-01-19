const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let Note = require('./Note');
const axios = require('axios');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://Aniket_DB:Hakuna@8551@cluster0.scs3s.mongodb.net/newNotes?retryWrites=true&w=majority",
{ useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology:true },
() => {
    console.log("Database connected");
})

app.get('/',(req,res) => {
    Reminder.find().then((reminder) =>{
        console.log(reminder);
    })
});

app.post('/add', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const createdDate = req.body.createdDate;
    const modifiedDate = req.body.modifiedDate;
    const reminder = req.body.reminder;

    const newNote = new Note({
        title,
        body,
        createdDate,
        modifiedDate,
        reminder
    });
    console.log(req.body);
        axios.post('http://localhost:4000/add', {
            "reminder" : reminder
        })
        .then(res => console.log(res.data))
        .catch(error => console.log(error.response))

    newNote.save()
    .then(() => res.json(`A new note: '${newNote.title}' has been created!`))
    .catch(err => res.status(400).json('Error: ' + err));
})

app.listen(4444);