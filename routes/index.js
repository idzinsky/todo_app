'use strict';

var db = require('../data/db');

exports.getAllTasks = function(req, res) {
  db.read(function(error, result) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(result);
    }
  });
};

exports.addTask = function(req, res) {
  var task = {
    text: req.body.text,
    status: false
  };
  db.create(task, function(error, result) {
    if (error) {
      res.status(500).send(error);
    } else {
      db.read(function(error, result) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).json(result);
        }
      });
    }
  });
};

exports.deleteTask = function(req, res) {
  db.delete(req.params.id, function(error, result) {
    if (error) {
      res.status(500).send(error);
    } else {
      db.read(function(error, result) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).json(result);
        }
      });
    }
  });
};
