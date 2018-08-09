  const express = require('express');
  const bodyParser = require('body-parser');
  const config = require('./config');
  const employee = require('./routes/employee.route');
  const mongoose = require('mongoose');

  var app = express();

  mongoose.connect(config.database, function(err) {
    if(err){
      console.log('Unable to connect to the database');
    } else {
      console.log('Connected to the database');
    }
  })

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false}));

  app.use('/employee', employee);

  app.listen(config.port, () => {
    console.log(`Server is up at port ${config.port}`);
  });
