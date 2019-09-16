/* eslint-disable */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

app.use('/static', express.static('static'));

var compiler = webpack(config);

var serverPort = process.env.PORT || 3000;

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.get('/assets/yorkshire-regular-webfont.woff', function(req, res) {
  res.sendFile(path.join(__dirname, 'assets/yorkshire-regular-webfont.woff'));
});

app.get('/assets/prism-okaidia.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'assets/prism-okaidia.css'));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(serverPort, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + serverPort);
});
