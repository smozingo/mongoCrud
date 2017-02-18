const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/demobase');

module.exports = db;

