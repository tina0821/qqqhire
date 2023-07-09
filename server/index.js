var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var urlencoded = bodyParser.urlencoded({ extended: true });
var sha1 = require("sha1");
var querystring = require("querystring");
var coon = require("./routes/db");
var app = express();
const crypto = require("crypto");
const axios = require("axios");
app.use(urlencoded);
app.use(cors());
app.use("/img", express.static("public/img"));
app.get("/", function (req, res) {
  let a = sha1("1234", "kjdsfkjds");
  ["$", "#"];
  res.send(a);
});
app.get("/cart", function (req, res) {
  // 設定 API 金鑰和其他相關參數
  const merchantId = "2000933";
  const hashKey = "XBERn1YOvpM9nfZc";
  const hashIv = "h1ONHk4P4yqbl5LK";
  const apiUrl = "https://logistics-stage.ecpay.com.tw/Express/map";

  // 建立要傳送的資料
  const data = {
    MerchantID: merchantId,
    MerchantTradeNo: "Order123456",
    MerchantTradeDate: "2023/07/09 10:30:00",
    TotalAmount: "100",
    TradeDesc: "Test Order",
    ItemName: "Test Item",
    // 其他必要的參數和自訂參數
    hashKey : "XBERn1YOvpM9nfZc",
    hashIv : "h1ONHk4P4yqbl5LK",
    method: "POST",
    accept: "text/html",
    contenttype: "application/x-www-form-urlencoded",
    ServerReplyURL: "http://localhost:443/cart",
    LogisticsType: "CVS",
    LogisticsSubType: "UNIMARTC2C",
    IsCollection: "N",
  };

  // 產生檢查碼
  const sortedKeys = Object.keys(data).sort();
  const sortedData = sortedKeys.map((key) => `${key}=${data[key]}`).join("&");

  // 加上 HashKey
  const sortedDataWithHashKey = `HashKey=${hashKey}&${sortedData}`;

  // 使用 SHA256 加密
  const hashValue = crypto
    .createHash("sha256")
    .update(sortedDataWithHashKey)
    .digest("hex");

  // 加上 HashIV
  const sortedDataWithHashIV = `HashIV=${hashIv}&${hashValue}`;

  // 再次使用 SHA256 加密
  const checkValue = crypto
    .createHash("sha256")
    .update(sortedDataWithHashIV)
    .digest("hex");

  // 將檢查碼加入資料
  data.CheckMacValue = checkValue;

  // 發送 API 請求
  axios
    .post(apiUrl, data)
    .then((response) => {
      // 成功回應，進行相應的處理
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      // 請求失敗，處理錯誤
      console.error("Error:", error.message);
    });
});
app.listen(443, function () {
  console.clear();
  console.log(new Date().toLocaleDateString());
});
