const mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});


const dbConfig = {
  host: 'mysql',
  port: 3306,
  user: 'user',
  password: '123456',
  database: 'db_aula',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

var connection = mysql.createConnection(dbConfig);

connection.connect();

router.get('/consulta-dados', function (req, res) {
  connection.query('SELECT * FROM customers', function (error, results, fields) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }

    console.log('The results is: ', results);
    res.json(results);
  });
  connection.end();
});

router.get('/liveness', function (req, res) {
  res.status(200).send('OK');
})

router.get('/readiness', function (req, res) {
  res.status(200).send('Ready');
})

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})