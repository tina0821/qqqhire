var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var urlencoded = bodyParser.urlencoded({ extended: true });
var sha1 = require("sha1");
var querystring = require("querystring");
var cookieParser = require("cookie-parser");
var coon = require("./routes/db");
var app = express();
//接收組員的檔案(路徑要對喔!!)
var cart = require('./routes/cart')
app.use(urlencoded);
app.use(cors());
app.use(cookieParser());
app.use('/cart',cart);
app.use("/img", express.static("public/img"));
app.get("/", function (req, res) {
  let a = sha1("kevin177342621", "HK&KD#GJD%UGDS@YU<>");
  res.send(a);
});


app.listen(8000, function () {
  console.clear();
  console.log(new Date().toLocaleDateString());
});
