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

const kuo = require('./routes/Kuo')
app.use('/',kuo)

const cart = require("./routes/cart");
app.use("/cart", cart);

const product = require("./routes/product");
app.use("/", product);

const login = require('./routes/login')
app.use('/', login)

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

app.post("/api/login", (req, res) => {
  console.log(req.body.aldata);
  // coon.query()
  res.send("GG");
});

app.listen(8000, function () {
  console.clear()
  console.log(new Date().toLocaleDateString());
});
