var express = require('express'),
  http = require('http'),
  rindex = require('./routes/index');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', rindex.index);
app.get('/json', rindex.json);
app.get('/user/:userid', rindex.getUser);

http.createServer(app).listen(3000);
