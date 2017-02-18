const User = require('./../models/userModel');


const userController = {

  addUser(req, res, next) {
    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then((user) => {
      console.log('added', user);
      res.cookie('userId', user._id, { maxAge: 360000, httpOnly: true });
      next();
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });

  },

  removeUser(req, res, next) {
    User.remove({
      username: req.body.username,
    }).then((user) => {
      console.log('removed', user);
      next();
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  updateUser(req, res, next) {
    User.findOneAndUpdate({
      username: req.body.username,
    }, {
      username: req.body.newUsername,
    }).then((user) => {
      console.log('updated', user);
      next();
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  findUser(req, res, next) {
    User.findOne({
      username: req.body.username,
      password: req.body.password,
    }).then((user) => {
      if (user) {
        console.log('Found user:', user);
        res.cookie('userId', user._id, { maxAge: 360000, httpOnly: true });
        next();
      } else {
        res.status(401).send('No user with that username/password');
      }
    }).catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
  },

  checkCookie(req, res, next) {
    console.log('checkCookie', req.cookies);
    if (req.cookies.userId) {
      next();
    } else {
      res.redirect('/');
    }
  },

};

module.exports = userController;
