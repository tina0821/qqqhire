var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var coon = require('./routes/db');
app.use(cors());
app.use(urlencoded);
app.use(express.json())
app.use(express.static('public'))
app.get('/', function (req, res) {
  let a = sha1('1234', 'kjdsfkjds');
  ['$', '#',]
  res.send(a);
});
app.get('/cart', function (req, res) {
  res.send('cartInfo');
});



const product = require('./routes/product')
app.use('/', product)

const login = require('./routes/login')
app.use('/', login)



app.get('/api/members/:account', (req, res) => {
  const memberData = req.body;
  const selectQuery = `SELECT * FROM userinfo WHERE account = ?`;

  coon.query("SELECT * FROM userinfo WHERE account=?", [req.params.account],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    })


    ;
});





app.post('/api/login', (req, res) => {
  console.log(req.body.aldata)
  // coon.query()
  res.send('GG')
})

app.listen(8000, function () {
  console.log(new Date().toLocaleDateString());
});