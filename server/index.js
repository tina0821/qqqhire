var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var urlencoded = bodyParser.urlencoded({ extended: true });
var sha1 = require("sha1");
var querystring = require("querystring");
var cookieParser = require("cookie-parser");
var coon = require("./routes/db");
var app = express();
app.use(urlencoded);
app.use(cors());
app.use(cookieParser());
app.use("/img", express.static("public/img"));
app.get("/", function (req, res) {
  let a = sha1("kevin177342621", "HK&KD#GJD%UGDS@YU<>");
  res.send(a);
});

app.post("/cart", async (req, res) => {
  let a = { ...req.body };
  res.cookie("data", JSON.stringify(a));
  // res.send(a);
  res.send("<script>window.close();</script >");
});


//取得使用者購物車資料
app.get("/cart", function (req, res) {
  coon.query(
    `SELECT * FROM cartmap INNER join product ON cartmap.productId=product.productId INNER join imagemap ON product.productId=imagemap.productId WHERE cartmap.account='kevin'`,
    [],
    (err, result) => {
      //最後要輸出的資料放這邊
      let cartMap = [];
      let num = [];
      let count = [];
      let newdata = [];
      let productAccountList = [];
      //為了防止最後物件出現RowDataPacket先字串化
      let string = JSON.stringify(result);
      //變回物件
      let data = JSON.parse(string);
      //過濾重複單號
      data.map((value) => {
        num.push(value.cartMapId);
      });
      num.map((value, index) => {
        num.indexOf(value) === index && count.push(index);
      });
      count.map((value,index)=>{
        data.map((item,number)=>{
          value===number&&newdata.push(item)
        })
      })
      //整理出租者名單
      newdata.map((el, index) => {
        newdata[index].rentStart = new Date(el.rentStart).toLocaleDateString();
        newdata[index].rentEnd = new Date(el.rentEnd).toLocaleDateString();
        newdata[index].day =
          new Date(el.rentEnd).getDate() - new Date(el.rentStart).getDate();
        newdata[index].total =
          newdata[index].rent * newdata[index].day + newdata[index].deposit;
        productAccountList.push(el.productAccount);
      });
      productAccountList = productAccountList.filter((value, index, arr) => {
        return arr.indexOf(value) === index;
      });
      //根據出租者做商品歸類
      productAccountList.map((productAccountName, index) => {
        cartMap.push({
          productAccount: productAccountName,
          product: [],
        });
        newdata.map((el) => {
          productAccountName === el.productAccount &&
            cartMap[index].product.push(el);
        });
      });
      res.send(cartMap);
    }
  );
});
app.listen(8000, function () {
  console.clear();
  console.log(new Date().toLocaleDateString());
});
