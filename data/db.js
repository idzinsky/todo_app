'use strict';

var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db.uri_string);

var Todo = mongoose.model('Todo', {
  text: String
});

exports.read = function(callback) {
  Todo.find(function(error, result) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

exports.create = function(task, callback) {
  Todo.create({
    text: task.text,
    done: task.status
  }, function(error, result) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};

exports.delete = function(id, callback) {
  Todo.remove({
    _id: id
  }, function (error, result) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
};
