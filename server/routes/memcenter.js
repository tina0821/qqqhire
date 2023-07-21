const express = require('express');
const cors = require('cors');
const router = express.Router();
const coon = require('./db');

router.use(cors());
router.use(express.json());

router.get('/api/mypro/:account', function (req, res) {
  const account = req.params.account;
  // console.log(req.params)
  const query = `
    SELECT p.productId, p.rent, p.deposit, p.productName, p.state, i.imageSrc
    FROM product AS p
    INNER JOIN imagemap AS i ON p.productId = i.productId
    WHERE p.productAccount = ? 
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

router.post('/api/fastup/:account', function (req, res) {
  const formData = req.body; // This will contain the form data sent from the frontend
  console.log(formData);

  // 進行了解構賦值的操作，將 formData 物件中的特定屬性拆解成獨立的變數
  // 將前端發送的請求中獲取的表單資料的特定屬性提取出來
  const {
    productName, rent, deposit, user, productCategoryChild,
    cityCounty, area, productDetail
  } = formData;

  // Insert data into "product" table
  const proInsert = `
    INSERT INTO product (productName, rent, deposit, productAccount, productCategoryChild, cityCounty, area, productDetail)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  coon.query(
    proInsert,
    [
      productName, rent, deposit, user, productCategoryChild,
      cityCounty, area, productDetail
    ],
    function (error, productResults) {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // 假設在“productResults.insertId”中有新插入的productId
        const productId = productResults.insertId;
      }
    }
  );
});


router.get("/api/myorder/:account", function (req, res) {
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

router.get('/api/myrent/:productAccount', function (req, res) {
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
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

router.post("/api/cancelOrder", function (req, res) {
  const { tradeitemId } = req.body;
  // 檢查 tradeitemId 的值
  // console.log("Received tradeitemId:", tradeitemId);

  const updateQuery = "UPDATE tradeitem SET state = 4 WHERE tradeitemId = ?";
  coon.query(updateQuery, [tradeitemId], function (error, results) {
    if (error) {
      // console.log(error);
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

router.post('/api/agreeOrder', function (req, res) {
  const { tradeitemId } = req.body;

  // 使用 JOIN 來執行兩個更新動作
  const updateQuery = `
    UPDATE tradeitem AS t
    JOIN tradeitemmap AS tm ON t.tradeitemId = tm.tradeitemId
    JOIN product AS p ON tm.productId = p.productId
    SET t.state = 1,
        p.rentalStatus = "出租中"
    WHERE t.tradeitemId = ?
  `;

  coon.query(updateQuery, [tradeitemId], function (error, results) {
    if (error) {
      // console.log(error);
      res.status(500).json({ message: 'Error occurred while updating tradeitem and product' });
    } else {
      res.status(200).json({ message: 'Order canceled successfully' });
    }
  });
});

module.exports = router;