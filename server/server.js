const fs      = require('fs');
const path    = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./db');
const userController = require('./controllers/userController');

const app = express();

// get the global middleware set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../')));

// start handling routes
app.post('/login',
  userController.findUser,
  (req, res) => {
    console.log(`Received login request: username[${req.body.username}] pwd:[${req.body.password}]`);
    res.redirect('/profile');
  }
);

app.post('/signup',
  userController.addUser,
  (req, res) => {
    console.log('User added');
    res.redirect('/profile');
  }
);

app.get('/profile',
  userController.checkCookie,
  (req, res) => {
    console.log('Going to profile', __dirname);
    res.sendFile(path.join(__dirname, '../profile.html'));
  }
);

// get the server up and listening on port 3000
app.listen(3000, () => console.log('Server listening on port 3000'));




