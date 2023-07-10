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

app.get('/', function(req, res) {
  let a = sha1('1234', 'kjdsfkjds');
  res.send(a);
});

app.get('/cart', function(req, res) {
  res.send('cartInfo');
});

app.get('/api/myorder', function(req, res) {
  const query = 'SELECT tradeitemId, productId, rentStart, rentEnd, state FROM tradeitem';
  coon.query(query, function(error, results) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (results.length > 0) {
        const productIds = results.map((result) => result.productId);
        const query = 'SELECT productId, productName, rent, deposit FROM product WHERE productId IN (?)';
        coon.query(query, [productIds], function(error, productResults) {
          if (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            const tradeitems = results.map((result) => {
              const product = productResults.find((product) => product.productId === result.productId);
              return {
                tradeitemId: result.tradeitemId,
                productName: product ? product.productName : 'Product not found',
                rent: product ? product.rent : 'Product not found',
                deposit: product ? product.deposit : 'Product not found',
                state: result.state,
                rentStart: result.rentStart,
                rentEnd: result.rentEnd
              };
            });
            res.json(tradeitems);
          }
        });
      } else {
        res.json([]);
      }
    }
  });
});
app.post('/api/cancelOrder', function(req, res) {
  const { tradeitemId } = req.body;
  // 檢查 tradeitemId 的值
  console.log("Received tradeitemId:", tradeitemId);

  const updateQuery = 'UPDATE tradeitem SET state = 4 WHERE tradeitemId = ?';
  coon.query(updateQuery, [tradeitemId], function(error, results) {
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





app.listen(8000, function() {
  console.log(new Date().toLocaleDateString());
});
