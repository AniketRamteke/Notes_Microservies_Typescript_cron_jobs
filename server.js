const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const Reminder = require('./reminders/Reminder');
const app = express();
const port = 5000;

var CronJob = require('cron').CronJob;
var job = new CronJob('* * * * * *', function() {

   const d = new Date();
   console.log(d);
   console.log(' ');
   axios.get('http://localhost:4000/')
  .then(res => //console.log(res.data)
   {  const obj = res.data; //array of objects from reminder DB
      console.log(res.data);
      obj.filter(function(reminder){
         if(reminder.reminder === d){
            console.log(`Reminder: to do list from Note, Please check`);
         }
      })
      
   })
  .catch(err => console.log(err));

   
});

job.start();

app.listen(port);