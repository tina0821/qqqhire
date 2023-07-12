//接收開啟伺服器功能
var express = require("express");
var coon = require("./db");
//小組管理專案分工需要架設分業系統(暫定解釋)
var page = express.Router();
//開始架設份派到自己的業務

page.get("/", async (req, res) => {
  res.send("success");
});

// page.get("/getAddress", async (req, res) => {
  
//   res.send(`<script>localStorage.removeItem("address");
//     let getAddress = async () => {
//         let add;
//         if (localStorage.getItem("address")) {
//         add = localStorage.getItem("address");
//         message.innerHTML = add;
//         } else {
//         setTimeout(getAddress, 1000);
//         }
//     };
//   </script >`);
// });

//取得使用者購物車資料
page.get("/cart", function (req, res) {
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
      count.map((value, index) => {
        data.map((item, number) => {
          value === number && newdata.push(item);
        });
      });
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

page.post("/cart", async (req, res) => {
  let a =JSON.stringify(req.body);
  res.cookie("address", `${JSON.stringify(a)}`);
  res.send("<script>window.close();</script >");
});

//輸出檔案給人彙整
module.exports = page;
//結束
