import React, { Component } from "react";
import { ConfigProvider } from "antd";
import { Button, message, Steps, Col, Row } from "antd";
// import io from 'socket.io-client';
import axios from "axios";
// import { onLogin, checkLogin, logOut } from "../cookie/cookie";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//引用自做檔案
import ShopingCart from "./shopingCart/index";
import DeletePrompt from "./shopingCart/productInfo/deletePrompt/deletePrompt";
import TradeItem from "./tradeItem/tradeItem";
import zhCN from "antd/locale/zh_TW";
import cartTest from "../../data/cartTest.json";
import "dayjs/locale/zh-cn";
import "./css/css.css";
// import { ajax } from "jquery";
// import paymentMethod from '../../data/paymentMethod.json'

/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/
Object.prototype.iscomplete = 0;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //暫時存放cookie資料來記錄cookie是否變化
      allCookie: null,
      //選擇我cookie要的超商資料
      cookieData: null,
      //日期
      date: undefined,
      //步驟名稱
      steps: [
        { title: "租物清單" },
        { title: "訂單確認" },
        { title: "訂單送出" },
      ],
      //步驟顯示器
      items: [
        { key: "租物清單", title: "租物清單" },
        { key: "訂單確認", title: "訂單確認" },
        { key: "訂單送出", title: "訂單送出" },
      ],
      //當前步驟頁面計數器
      current: 0,
      //預設租物車商品資訊
      cartMap: cartTest,
      //全選觸發器
      selectAll: 0,
      //顯示提示視窗
      show: 0,
      //提示視窗呈現的內容
      deletePromptType: 1,
      //要從購物車刪除商品的資訊
      deletePrompt: null,
      //進入第二頁結帳商品的資訊
      tradeItem: null,
      //結帳商品總金額
      totalMoney: "",
      //手動輸入的地址
      address: {},
      //錯誤訊息
      err: [{ message: "address", count: 0 }],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* antd客製化樣式 */}
        <ConfigProvider
          theme={{
            token: {
              colorSplit: "#0B7597",
              fontSize: "1.7rem",
              colorPrimary: "#0B7597",
            },
          }}
          locale={zhCN}
        >
          {/* 提示框框 */}
          <DeletePrompt
            show={this.state.show}
            data={this}
            productInfo={this.state.deletePrompt}
          />
          <div className="">
            {/* 步驟條 */}
            <Row align={"middle"} justify={"center"}>
              <Col xs={22}>
                <Steps
                  className="steps"
                  current={this.state.current}
                  items={this.state.items}
                />
              </Col>
            </Row>
            {/* 步驟內容物 */}
            <Row align={"middle"} justify={"center"}>
              <Col xs={22} className="contentStyle cartFontSize">
                {this.state.current === 0 && <ShopingCart data={this} />}
                {this.state.current === 1 && <TradeItem data={this} />}
                {this.state.current === 2 && <ShopingCart data={this} />}
              </Col>
            </Row>
            {/* 切換步驟選單 */}
            <Row align={"middle"} justify={"center"}>
              <Col xs={22} className="d-flex justify-content-end mt-5">
                {this.state.current > 0 && (
                  <Button
                    style={{ margin: "0 8px" }}
                    onClick={() => this.moveSteps(-1)}
                    size="large"
                  >
                    返回
                  </Button>
                )}
                {this.state.current < this.state.steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => this.moveSteps(1)}
                    size="large"
                  >
                    下一步
                  </Button>
                )}
                {this.state.current === this.state.steps.length - 1 && (
                  <Button
                    type="primary"
                    onClick={() => message.success("Processing complete!")}
                    size="large"
                  >
                    結帳
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        </ConfigProvider>
      </React.Fragment>
    );
  }

  //第一次更新資訊
  componentDidMount = async () => {
    //取得資料庫商品分類完成的資料
    let newCartMap;
    await axios.get("http://localhost:8000/cart/cart", {}).then((res) => {
      newCartMap = res.data;
    });
    //更新資料
    let newstate = { ...this.state };
    newstate.cartMap = newCartMap;
    this.setState(newstate);
  };

  componentDidUpdate() {
    // console.log(this.state.tradeItem)
  }

  moveSteps = async (e) => {
    let newstate = { ...this.state };
    newstate.current += e;
    //切換頁面做依判斷做事
    switch (newstate.current) {
      case 0:
        this.setState(newstate);
        break;
      //訂單頁面沒訂單要擋住，顯示提示框type2告訴使用者沒有勾選商品
      case 1:
        newstate = this.sendDataToStep2(newstate);
        break;
      case 2:
        !newstate.address
          ? (newstate.err[0] = { message: "address", count: 1 })
          : (newstate.err[0] = { message: "address", count: 0 });
        let checkerr = newstate.err.filter((value) => value.count === 1);
        checkerr.length !== 0 && (newstate.current = 1);
        break;

      default:
        break;
    }
    this.setState(newstate);
  };
  //全選商品
  changeAll = (e) => {
    let newstate = { ...this.state };
    if (e === 1) {
      newstate.iscomplete = 0;
      newstate.cartMap.map((item) => {
        item.product.map((value) => {
          value.iscomplete = 0;
          return true;
        });
        item.iscomplete = 0;
        return true;
      });
    } else {
      newstate.iscomplete = 1;
      newstate.cartMap.map((item) => {
        item.product.map((value) => {
          value.iscomplete = 1;
          return true;
        });
        item.iscomplete = 1;
        return true;
      });
    }
    this.setState(newstate);
  };
  //勾選店家所有商品
  changePart = (e, iscomplete, index) => {
    let newstate = { ...this.state };
    if (iscomplete === 1) {
      newstate.iscomplete = 0;
      newstate.cartMap[index].iscomplete = 0;
      newstate.cartMap[index].product.map((item) => {
        item.iscomplete = 0;
        return true;
      });
    } else {
      newstate.cartMap[index].iscomplete = 1;
      newstate.cartMap[index].product.map((item) => {
        item.iscomplete = 1;
        return true;
      });
    }
    this.setState(newstate);
  };

  //勾選一個
  changeOne = (e, item, index, cartMapIndex) => {
    let newstate = { ...this.state };
    if (item === 1) {
      newstate.iscomplete = 0;
      newstate.cartMap[cartMapIndex].product[index].iscomplete = 0;
      newstate.cartMap[cartMapIndex].iscomplete = 0;
    } else {
      newstate.cartMap[cartMapIndex].product[index].iscomplete = 1;
    }
    this.setState(newstate);
  };

  //確認刪除購物車裡的內容視窗
  showDeleteWindow = (e, type) => {
    let newstate = { ...this.state };
    newstate.show = 1;
    newstate.deletePromptType = type;
    newstate.deletePrompt = e;
    this.setState(newstate);
  };

  //取消刪除購物車內容
  cancel = () => {
    let newstate = { ...this.state };
    newstate.show = 0;
    this.setState(newstate);
  };

  //確定刪除購物車內容
  deleteItem = (e) => {
    let newstate = { ...this.state };
    newstate.cartMap.map((item, index) => {
      newstate.cartMap[index].product = item.product.filter((value) => {
        return value.cartMapId !== e.cartMapId;
      });
      newstate.show = 0;
      return true;
    });
    this.setState(newstate);
  };

  //向第二頁傳送以勾選商品資訊
  sendDataToStep2 = (data) => {
    let newstate = { ...data };
    let totalMoney = 0;
    let faketradeItem = [];
    //塞入購物車裡每個賣家的資料
    newstate.cartMap.map((item, index) => {
      faketradeItem[index] = { productAccount: item.productAccount };
      //為每一個賣家的商品開一個陣列
      faketradeItem[index].product = [];
      //假如有勾選就塞進去
      item.product.map((v, i) => {
        v.iscomplete === 1 && faketradeItem[index].product.push(v);
        return true;
      });
      return true;
    });
    //打包帶給結帳頁面用，果濾掉沒有勾選商品的賣家
    newstate.tradeItem = faketradeItem.filter((item) => {
      item.product.length !== 0 &&
        //結帳商品總金額
        item.product.map((value) => {
          return (totalMoney += value.total);
        });
      return item.product.length !== 0;
    });
    newstate.totalMoney = totalMoney;
    //假如沒商品勾選頁數停留在0顯示錯誤2沒有勾選商品
    if (newstate.tradeItem.length === 0) {
      newstate.current = 0;
      newstate.deletePromptType = 2;
      newstate.show = 1;
    }
    //傳出去
    return newstate;
  };

  //記錄每一位賣家訂單的寄送地址
  addAddress = (addressValue, productAccount, shippingMethod = 0) => {
    let newstate = { ...this.state };
    const productAccountList = [];
    newstate.tradeItem.map((value) => {
      productAccountList.push(value.productAccount);
      return true;
    });
    const productAccountNumber = productAccountList.indexOf(productAccount);
    //資料修改新增
    newstate.tradeItem[productAccountNumber].address = addressValue;
    shippingMethod &&
      (newstate.tradeItem[productAccountNumber].shippingMethod =
        shippingMethod);
    this.setState(newstate);
  };

  //記錄每一位賣家付款方式
  payMethod = (payMethod, productAccount, addressValue = 0) => {
    let newstate = { ...this.state };
    const productAccountList = [];
    newstate.tradeItem.map((value) => {
      productAccountList.push(value.productAccount);
      return true;
    });
    const productAccountNumber = productAccountList.indexOf(productAccount);
    //資料修改新增
    newstate.tradeItem[productAccountNumber].payMethod = payMethod;
    addressValue &&
      (newstate.tradeItem[productAccountNumber].addressValue = addressValue);
    this.setState(newstate);
  };

  //記錄每一位賣家信用卡資訊
  creditCardInfo = (
    productAccount,
    creditCardNumber,
    creadCartmonth,
    creditCardYear,
    cvc
  ) => {
    let newstate = { ...this.state };
    const productAccountList = [];
    newstate.tradeItem.map((value) => {
      productAccountList.push(value.productAccount);
      return true;
    });
    const productAccountNumber = productAccountList.indexOf(productAccount);
    //資料修改新增
    newstate.tradeItem[productAccountNumber].creditCardNumber =
      creditCardNumber;
    newstate.tradeItem[productAccountNumber].creadCartmonth = creadCartmonth;
    newstate.tradeItem[productAccountNumber].creditCardYear = creditCardYear;
    newstate.tradeItem[productAccountNumber].cvc = cvc;
    this.setState(newstate);
  };
}

export default Cart;
