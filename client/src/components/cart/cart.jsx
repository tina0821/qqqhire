import React, { Component } from "react";
import { ConfigProvider } from "antd";
import { Button, message, Steps } from "antd";
import { onLogin, checkLogin, logOut } from "../cookie/cookie";

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShopingCart from "./shopingCart/index";
import DeletePrompt from "./shopingCart/productInfo/deletePrompt/deletePrompt";
import TradeItem from "./tradeItem/tradeItem ";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_TW";
import "./css/css.css";

class Cart extends Component {
  state = {
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
    current: 0,
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
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
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
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
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
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
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
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
            day: 15 - 11,
            total: 450 * 4 + 888,
            productCity: "臺北市",
          },
        ],
      },
    ],
    show: 0,
    deletePrompt: <DeletePrompt />,
  };

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
              {this.state.steps[this.state.current].content}
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
        {this.state.deletePrompt}
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
    newstate.steps[0].content = (
      <ShopingCart
        changePart={this.changePart}
        changeOne={this.changeOne}
        data={this.state.cartMap}
        showDeleteWindow={this.showDeleteWindow}
        changeAll={this.changeAll}
        selectAll={0}
      />
    );
    this.setState(newstate);
  };

  moveSteps = (e) => {
    let newstate = { ...this.state };
    newstate.current += e;
    switch (e) {
      case 0:
        newstate.steps[0].content = (
          <ShopingCart
            changePart={this.changePart}
            changeOne={this.changeOne}
            data={this.state.cartMap}
            showDeleteWindow={this.showDeleteWindow}
            changeAll={this.changeAll}
            selectAll={newstate.selectAll}
          />
        );
        break;
      case 1:
        this.sendDataToStep2();
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
      newstate.selectAll = 0;
      newstate.cartMap.map((item) => {
        item.product.map((value) => {
          value.isComplete = 0;
        });
        item.isComplete = 0;
        return true;
      });
    } else {
      newstate.selectAll = 1;
      newstate.cartMap.map((item) => {
        item.product.map((value) => {
          value.isComplete = 1;
        });
        item.isComplete = 1;
        return true;
      });
    }
    newstate.steps[0].content = (
      <ShopingCart
        changePart={this.changePart}
        changeOne={this.changeOne}
        data={this.state.cartMap}
        showDeleteWindow={this.showDeleteWindow}
        changeAll={this.changeAll}
        selectAll={newstate.selectAll}
      />
    );
    this.setState(newstate);
  };
  //勾選店家所有商品
  changePart = (e, item, index) => {
    let newstate = { ...this.state };
    if (item === 1) {
      newstate.cartMap[index].isComplete = 0;
      newstate.cartMap[index].product.map((item) => {
        item.isComplete = 0;
        return true;
      });
    } else {
      newstate.cartMap[index].isComplete = 1;
      newstate.cartMap[index].product.map((item) => {
        item.isComplete = 1;
        return true;
      });
    }
    newstate.steps[0].content = (
      <ShopingCart
        changePart={this.changePart}
        changeOne={this.changeOne}
        data={this.state.cartMap}
        showDeleteWindow={this.showDeleteWindow}
        changeAll={this.changeAll}
      />
    );
    this.setState(newstate);
  };

  //勾選一個
  changeOne = (e, item, index, cartMapIndex) => {
    let newstate = { ...this.state };
    if (item === 1) {
      newstate.cartMap[cartMapIndex].product[index].isComplete = 0;
      newstate.cartMap[cartMapIndex].isComplete = 0;
    } else {
      newstate.cartMap[cartMapIndex].product[index].isComplete = 1;
    }
    newstate.steps[0].content = (
      <ShopingCart
        changePart={this.changePart}
        changeOne={this.changeOne}
        data={this.state.cartMap}
        showDeleteWindow={this.showDeleteWindow}
        changeAll={this.changeAll}
      />
    );
    this.setState(newstate);
  };

  //確認刪除購物車裡的內容視窗
  showDeleteWindow = (e) => {
    let newstate = { ...this.state };
    newstate.show = 1;
    newstate.deletePrompt = (
      <DeletePrompt
        show={newstate.show}
        close={this.cancel}
        deleteItem={this.deleteItem}
        productInfo={e}
      />
    );
    this.setState(newstate);
  };

  //取消刪除購物車內容
  cancel = () => {
    let newstate = { ...this.state };
    newstate.show = 0;
    newstate.deletePrompt = (
      <DeletePrompt
        show={newstate.show}
        close={this.cancel}
        deleteItem={this.deleteItem}
      />
    );
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
      newstate.steps[0].content = (
        <ShopingCart
          changePart={this.changePart}
          changeOne={this.changeOne}
          data={this.state.cartMap}
          showDeleteWindow={this.showDeleteWindow}
          changeAll={this.changeAll}
        />
      );
      newstate.deletePrompt = (
        <DeletePrompt
          show={newstate.show}
          close={this.cancel}
          deleteItem={this.deleteItem}
        />
      );
      this.setState(newstate);
    });
  };

  //向第二頁傳送以勾選商品資訊
  sendDataToStep2 = () => {
    let newstate = { ...this.state };
    let faketradeItem = []
    newstate.cartMap.map((item, index) => {
      faketradeItem[index]={productAccount:item.productAccount}
      faketradeItem[index].product =[]
      item.product.map((v,i)=>{
        v.isComplete===1&&(
          faketradeItem[index].product.push(v)
        )
      })
    })
    newstate.tradeItem = faketradeItem.filter(item=>{
      return item.product.length!==0
    })
    newstate.steps[1].content = <TradeItem tradeItem={newstate.tradeItem}/>;
    this.setState(newstate)
  };
}

export default Cart;
