var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var urlencoded = bodyParser.urlencoded(({ extended: true }));
var sha1 = require('sha1');
var querystring = require('querystring');
var coon = require('./routes/db');
const app = express()
app.use(cors());
app.use(urlencoded);
app.use(express.json());
app.use(express.static("public"));

app.use("/img", express.static("public/img"));
const cart = require("./routes/cart");
app.use("/cart", cart);

const product = require("./routes/product");
app.use("/", product);

// const login = require('./routes/login')
// app.use('/', login)


app.get('/api/mypro/:account', function (req, res) {
  const account = req.params.account;
  console.log(req.params)
  const query = `
    SELECT p.productId, p.rent, p.deposit, p.productName, p.rentalStatus, p.state, i.imageSrc
    FROM product AS p
    INNER JOIN imagemap AS i ON p.productId = i.productId
    WHERE p.productAccount = ? 
  `;
  coon.query(query, [account], function (error, results) {
    res.json(results);
  });
});


app.get("/api/myorder/:account", function (req, res) {
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
      res.status(500).json({ error: "Internal Server Error" });
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
    GROUP BY p.productId
    ORDER BY t.tradeitemId
  `;
  coon.query(query, [productAccount], function (error, results) {
      res.json(results);   
  });
});

app.get("/api/members/:account", (req, res) => {
  const memberData = req.body;
  const selectQuery = `SELECT * FROM userinfo WHERE account = ?`;

  coon.query(
    "SELECT * FROM userinfo WHERE account=?",
    [req.params.account],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.post("/api/cancelOrder", function (req, res) {
  const { tradeitemId } = req.body;
  // 檢查 tradeitemId 的值
  console.log("Received tradeitemId:", tradeitemId);

  const updateQuery = "UPDATE tradeitem SET state = 4 WHERE tradeitemId = ?";
  coon.query(updateQuery, [tradeitemId], function (error, results) {
    if (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ message: "Order canceled successfully" });
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    }
  });
});

// app.post('/api/agreeOrder', function (req, res) {
//   const { tradeitemId } = req.body;
//   // 檢查 tradeitemId 的值
//   const updateQuery = 'UPDATE tradeitem SET state = 1 WHERE tradeitemId = ?';
//   coon.query(updateQuery, [tradeitemId], function (error, results) {
//     if (results.affectedRows > 0) {
//       res.status(200).json({ message: 'Order canceled successfully' });
//     }
//   });
// });
// 修改 API 路由，用來處理按下 "確定" 按鈕後的動作
app.post('/api/agreeOrder', function (req, res) {
  const { tradeitemId } = req.body;

  // 使用 JOIN 來執行兩個更新動作
  const updateQuery = `
    UPDATE tradeitem AS t
    JOIN tradeitemmap AS tm ON t.tradeitemId = tm.tradeitemId
    JOIN product AS p ON tm.productId = p.productId
    SET t.state = 1,
        p.state = 1
    WHERE t.tradeitemId = ?
  `;

  coon.query(updateQuery, [tradeitemId], function (error, results) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error occurred while updating tradeitem and product' });
      return;
    }

    // 完成所有更新，回傳成功訊息
    res.status(200).json({ message: 'Order canceled successfully' });
  });
});



app.post("/api/login", (req, res) => {
  console.log(req.body.aldata);
  // coon.query()
  res.send("GG");
});

app.listen(8000, function () {
  // console.clear()
  console.log(new Date().toLocaleDateString());
});
