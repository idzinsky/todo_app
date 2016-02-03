'use strict';

var express         = require('express');
var app             = express();
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var config          = require('./config');
var routes          = require('./routes');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.get('/api/task/all', routes.getAllTasks);
app.post('/api/task', routes.addTask);
app.delete('/api/task/:id', routes.deleteTask);

app.get('/', function(req, res) {
  res.sendFile('index');
});

var server = app.listen(config.server.port, config.server.host, function() {
  console.log("Running at " + config.server.host + " on port " +  config.server.port);
});
