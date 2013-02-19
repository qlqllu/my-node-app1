var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'test',
  user     : 'root',
  password : 'root',
});



exports.index = function(req, res){
  res.render('index', {s: 'hello'});
};

exports.json = function(req, res){
  res.send({a: 1, b: 2});
};

exports.getUser = function(req, res){
  connection.connect();
  connection.query('SELECT username, password from user where id = ' + req.params.userid, function(err, rows, fields) {
    if (err) throw err;

    res.send({userid: req.params.userid, name: rows[0].username, password: rows[0].password});
  });

  connection.end();
  //res.send({userid: req.params.userid, name: "ljs", age: 1});

};