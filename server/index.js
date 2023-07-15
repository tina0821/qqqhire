var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded({ extended: true });
var sha1 = require('sha1');
var querystring = require('querystring');
var coon = require('./routes/db');
var app = express();
app.use(cors());
// express.json() 解析器來處理 JSON 數據
app.use(express.json());
// urlencoded 解析器處理表單數據的解析器
app.use(urlencoded);
app.use('/img', express.static('public/img'));

app.get('/', function (req, res) {
  let a = sha1('1234', 'kjdsfkjds');
  res.send(a);
});

app.get('/cart', function (req, res) {
  res.send('cartInfo');
});

app.get('/api/mypro/:account', function (req, res) {
  const account = req.params.account;
  const query = `
    SELECT p.productId, p.rent, p.deposit, p.productName, i.imageSrc
    FROM product AS p
    INNER JOIN imagemap AS i ON p.productId = i.productId
    WHERE p.productAccount = ? 
  `;
  coon.query(query, [account], function (error, results) {
    res.json(results);
  });
});


app.get('/api/myorder/:account', function (req, res) {
  const account = req.params.account;
  const query = `
    SELECT t.tradeitemId, t.account, t.productAccount, t.state, m.rentStart, m.rentEnd, p.productName, p.rent, p.deposit, i.imageSrc
    FROM tradeitem AS t
    INNER JOIN tradeitemmap AS m ON t.tradeitemId = m.tradeitemId
    INNER JOIN product AS p ON m.productId = p.productId
    INNER JOIN imagemap AS i ON p.productId = i.productId
    WHERE t.account = ?
    GROUP BY p.productId
    ORDER BY t.tradeitemId
  `;
  coon.query(query, [account], function (error, results) {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/myrent/:productAccount', function (req, res) {
  const productAccount = req.params.productAccount;
  const query = `
  SELECT t.tradeitemId, t.account, t.productAccount, t.state, m.rentStart, m.rentEnd, p.productName, p.rent, p.deposit, i.imageSrc
  FROM tradeitem AS t
  INNER JOIN tradeitemmap AS m ON t.tradeitemId = m.tradeitemId
  INNER JOIN product AS p ON m.productId = p.productId
  INNER JOIN imagemap AS i ON p.productId = i.productId
  WHERE t.productAccount = ?
  GROUP BY t.tradeitemId
  ORDER BY t.tradeitemId
`;
  coon.query(query, [productAccount], function (error, results) {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


app.post('/api/cancelOrder', function (req, res) {
  const { tradeitemId } = req.body;
  // 檢查 tradeitemId 的值
  console.log("Received tradeitemId:", tradeitemId);

  const updateQuery = 'UPDATE tradeitem SET state = 4 WHERE tradeitemId = ?';
  coon.query(updateQuery, [tradeitemId], function (error, results) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ message: 'Order canceled successfully' });
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    }
  });
});

app.post('/api/agreeOrder', function (req, res) {
  const { tradeitemId } = req.body;
  // 檢查 tradeitemId 的值
  const updateQuery = 'UPDATE tradeitem SET state = 1 WHERE tradeitemId = ?';
  coon.query(updateQuery, [tradeitemId], function (error, results) {
    if (results.affectedRows > 0) {
      res.status(200).json({ message: 'Order canceled successfully' });
    }
  });
});

app.listen(8000, function () {
  console.log(new Date().toLocaleDateString());
});