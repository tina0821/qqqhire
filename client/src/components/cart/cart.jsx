import React, { Component } from "react";
import { ConfigProvider } from "antd";
import { Button, message, Steps } from "antd";
// import { onLogin, checkLogin, logOut } from "../cookie/cookie";

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShopingCart from "./shopingCart/index";
import DeletePrompt from "./shopingCart/productInfo/deletePrompt/deletePrompt";
import TradeItem from "./tradeItem/tradeItem ";
import zhCN from "antd/locale/zh_TW";
import cityCountyData from '../../data/CityCountyData.json'
import paymentMethod from '../../data/paymentMethod.json'
import "dayjs/locale/zh-cn";
import "./css/css.css";

/*eslint no-extend-native: ["error", { "exceptions": ["Object"] }]*/

Object.prototype.iscomplete = 1;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityCountyData:cityCountyData,
      date: undefined,
      steps: [
        {
          title: "租物清單",
          content: null,
        },
        {
          title: "訂單確認",
          content: null,
        },
        {
          title: "訂單送出",
          content: null,
        },
      ],
      items: [{ key: "", title: "" }],
      current: 1,
      contentStyle: {
        textAlign: "center",
        borderRadius: "10px",
        border: "2px solid black",
        marginTop: 30,
      },
      cartMap: [
        {
          productAccount: "kevin",
          product: [
            {
              cMID: "aaaaa",
              productID: "商品一",
              productName: "咖啡機",
              images: "/images/product/coffee006冰滴咖啡去背.png",
              rent: 450,
              deposit: 888,
              rentStart: "112-04-11",
              rentEnd: "112-04-15",
              day: 15 - 11,
              total: 450 * 4 + 888,
              productCity: "臺北市",
            },
            {
              cMID: "bbbb",
              productID: "商品2",
              productName: "娃娃",
              images: "/images/product/coffee006冰滴咖啡去背.png",
              rent: 450,
              deposit: 888,
              rentStart: "112-04-11",
              rentEnd: "112-04-15",
              day: 15 - 11,
              total: 450 * 4 + 888,
              productCity: "臺北市",
            },
          ],
        },
        {
          productAccount: "simon",
          product: [
            {
              cMID: "cccc",
              productID: "商品一",
              productName: "咖啡機",
              images: "/images/product/coffee006冰滴咖啡去背.png",
              rent: 450,
              deposit: 888,
              rentStart: "112-04-11",
              rentEnd: "112-04-15",
              day: 15 - 11,
              total: 450 * 4 + 888,
              productCity: "臺北市",
            },
            {
              cMID: "dddd",
              productID: "商品2",
              productName: "娃娃",
              images: "/images/product/coffee006冰滴咖啡去背.png",
              rent: 450,
              deposit: 888,
              rentStart: "112-04-11",
              rentEnd: "112-04-15",
              day: 15 - 11,
              total: 450 * 4 + 888,
              productCity: "臺北市",
            },
          ],
        },
      ],
      show: 0,
      selectAll: 0,
      deletePrompt:null,
      tradeItem:null,
    };
  }

  render() {
    return (
      <React.Fragment>
        <ConfigProvider locale={zhCN}>
          <div className="container">
            <Steps
              className="steps"
              current={this.state.current}
              items={this.state.items}
            />
            <div style={this.state.contentStyle}>
              {(this.state.current === 0 && <ShopingCart data={this} />)}
              {(this.state.current === 1 && <TradeItem data={this} cityCountyData={this.state.cityCountyData}/>)}
              {(this.state.current === 2 && <ShopingCart data={this} />)}
              {/* {this.state.steps[this.state.current].content} */}
            </div>
            <div className="d-flex justify-content-end mt-5">
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
            </div>
          </div>
        </ConfigProvider>
        <DeletePrompt 
        show={this.state.show}
        close={this.cancel}
        deleteItem={this.deleteItem}
        productInfo={this.state.deletePrompt}/>
      </React.Fragment>
    );
  }

  //第一次更新資訊
  componentDidMount = () => {
    let newstate = { ...this.state };
    let newitems = this.state.steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    newstate.items = newitems;
    this.setState(newstate);
  };

  moveSteps = async(e) => {
    let newstate = this.sendDataToStep2();
    newstate.current += e;
  switch (newstate.current) {
    case 0:
      this.setState(newstate);
    break;
    case 1: 
      newstate.tradeItem.length!==0?this.setState(newstate):alert('未勾選商品!!!');
    break;
    case 2:
      this.setState(newstate)
    break;
 
  default:
    break;
 }
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
  showDeleteWindow = (e) => {
    let newstate = { ...this.state };
    newstate.show = 1;
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
        return value.cMID !== e.cMID;
      });
      newstate.show = 0;
      return true;
    });
    this.setState(newstate);
  };

  //向第二頁傳送以勾選商品資訊
  sendDataToStep2 = () => {
    let newstate = { ...this.state };
    let faketradeItem = [];
    newstate.cartMap.map((item, index) => {
      faketradeItem[index] = { productAccount: item.productAccount };
      faketradeItem[index].product = [];
      item.product.map((v, i) => {
        v.iscomplete === 1 && faketradeItem[index].product.push(v);
        return true;
      });
      return true;
    });
    newstate.tradeItem = faketradeItem.filter((item) => {
      return item.product.length !== 0;
    });
    return newstate;
  };
}

export default Cart;
