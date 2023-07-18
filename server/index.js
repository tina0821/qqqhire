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
  const account = req.params.account;
  const selectQuery = `SELECT * FROM userinfo WHERE account = ?`;

  coon.query("SELECT * FROM userinfo WHERE account=?", [req.params.account],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    })


    ;
});

app.post('/api/members', (req, res) => {
  const account = req.params.account;
  const memberData = req.body.name;
  console.log(account)

  // const query = `UPDATE userinfo SET password=?, address=?, name="哈哈", nickname=?, birthday=?, phoneNumber=?, identityCard=?, email=?, avatar=? WHERE account="3x7Y90"`;
  // const values = [
  //   memberData.password,
  //   memberData.address,
  //   memberData.name,
  //   memberData.nickname,
  //   memberData.birthday,
  //   memberData.phoneNumber,
  //   memberData.identityCard,
  //   memberData.email,
  //   memberData.avatar,
  //   account
  // ];

  const query = `UPDATE userinfo SET  name=? WHERE account=?`;
  const values = [
    memberData.name,
    account
  ];

  coon.query(query, values, (error, results) => {
    if (error) {
      console.error('錯誤123', error);
      res.status(500).json({ message: '發生錯誤' });
    } else {
      console.log('更新成功');
      res.send({ message: '更新成功' });
    }
  });
});



app.post('/api/login', (req, res) => {
  console.log(req.body.aldata)
  // coon.query()
  res.send('GG')
})

app.listen(8000, function () {
  console.log(new Date().toLocaleDateString());
});