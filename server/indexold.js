// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var urlencoded = bodyParser.urlencoded({ extended: true });
// var sha1 = require('sha1');
// var querystring = require('querystring');
// var coon = require('./routes/db');
// var app = express();
// app.use(cors());
// // express.json() 解析器來處理 JSON 數據
// app.use(express.json());
// // urlencoded 解析器處理表單數據的解析器
// app.use(urlencoded);
// app.use('/img', express.static('public/img'));

// app.get('/', function(req, res) {
//   let a = sha1('1234', 'kjdsfkjds');
//   res.send(a);
// });

// app.get('/cart', function(req, res) {
//   res.send('cartInfo');
// });

// app.get('/api/myorder', function(req, res) {
//   // 處理 GET 請求 '/api/myorder'
//   const query = 'SELECT tradeitemId, productId, rentStart, rentEnd, state FROM tradeitem';
//   // 定義 SQL 查詢語句，選取 tradeitem 表中的 tradeitemId、productId、rentStart、rentEnd 和 state 欄位
//   coon.query(query, function(error, results) {
//     // 執行 SQL 查詢，並提供回呼函式處理結果
//     if (error) {
//       // 如果查詢過程中發生錯誤
//       console.log(error);
//       // 輸出錯誤訊息到控制台
//       res.status(500).json({ error: 'Internal Server Error' });
//       // 回傳 500 狀態碼和一個 JSON 物件，其中包含錯誤訊息
//     } else {
//       // 如果查詢成功
//       if (results.length > 0) {
//         // 如果查詢結果的行數大於 0
//         const productIds = results.map((result) => result.productId);
//         // 從查詢結果中提取所有的 productId 值，並儲存在 productIds 陣列中
//         const query = 'SELECT productId, productName, rent, deposit FROM product WHERE productId IN (?)';
//         // 定義 SQL 查詢語句，選取 product 表中的 productId、productName、rent 和 deposit 欄位，
//         // 條件是 productId 在 productIds 陣列中
//         coon.query(query, [productIds], function(error, productResults) {
//           // 執行 SQL 查詢，並提供回呼函式處理結果
//           if (error) {
//             // 如果查詢過程中發生錯誤
//             console.log(error);
//             // 輸出錯誤訊息到控制台
//             res.status(500).json({ error: 'Internal Server Error' });
//             // 回傳 500 狀態碼和一個 JSON 物件，其中包含錯誤訊息
//           } else {
//             // 如果查詢成功
//             const tradeitems = results.map((result) => {
//               // 對於每一個查詢結果的行，執行以下操作
//               const product = productResults.find((product) => product.productId === result.productId);
//               // 在 productResults 查詢結果中尋找 productId 等於 result.productId 的記錄
//               return {
//                 // 建立包含 tradeitem 資訊的物件
//                 tradeitemId: result.tradeitemId,
//                 // 設定 tradeitemId 屬性為 result.tradeitemId
//                 productName: product ? product.productName : 'Product not found',
//                 // 設定 productName 屬性為 product 的 productName 屬性，如果 product 為 undefined，則設定為 'Product not found'
//                 rent: product ? product.rent : 'Product not found',
//                 // 設定 rent 屬性為 product 的 rent 屬性，如果 product 為 undefined，則設定為 'Product not found'
//                 deposit: product ? product.deposit : 'Product not found',
//                 // 設定 deposit 屬性為 product 的 deposit 屬性，如果 product 為 undefined，則設定為 'Product not found'
//                 state: result.state,
//                 // 設定 state 屬性為 result.state
//                 rentStart: result.rentStart,
//                 // 設定 rentStart 屬性為 result.rentStart
//                 rentEnd: result.rentEnd
//                 // 設定 rentEnd 屬性為 result.rentEnd
//               };
//             });
//             res.json(tradeitems);
//             // 回傳 tradeitems 物件陣列作為 JSON 回應
//           }
//         });
//       } else {
//         res.json([]);
//         // 如果查詢結果的行數為 0，回傳一個空陣列作為 JSON 回應
//       }
//     }
//   });
// });

// app.post('/api/cancelOrder', function(req, res) {
//   const { tradeitemId } = req.body;
//   // 檢查 tradeitemId 的值
//   console.log("Received tradeitemId:", tradeitemId);

//   const updateQuery = 'UPDATE tradeitem SET state = 4 WHERE tradeitemId = ?';
//   coon.query(updateQuery, [tradeitemId], function(error, results) {
//     if (error) {
//       console.log(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       if (results.affectedRows > 0) {
//         res.status(200).json({ message: 'Order canceled successfully' });
//       } else {
//         res.status(404).json({ error: 'Order not found' });
//       }
//     }
//   });
// });





// app.listen(8000, function() {
//   console.log(new Date().toLocaleDateString());
// });
