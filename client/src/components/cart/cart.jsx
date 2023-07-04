import React, { Component } from "react";
import { ConfigProvider } from "antd";
import { Button, message, Steps } from "antd";
import {onLogin,checkLogin,logOut} from '../cookie/cookie'

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShopingCart from "./shopingCart/index";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_TW";
import DeletePrompt from "./shopingCart/productInfo/deletePrompt/deletePrompt";
import './css/css.css'

Object.prototype.isComplete=0

class Cart extends Component {
  state = {
    date: undefined,
    steps: [
      {
        title: "購物車清單",
        content: null,
      },
      {
        title: "訂單確認",
        content: "Second-content",
      },
      {
        title: "訂單送出",
        content: "Last-content",
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
            images:'/images/product/coffee006冰滴咖啡去背.png',
            rent: 450,
            deposit: 888,
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
            day: 15 - 11,
            total: 450 * 4 + 888,
            productCity: "臺北市",
            isComplete: 1,
          },
          {
            cMID: "bbbb",
            productID: "商品2",
            productName: "娃娃",
            images:'/images/product/coffee006冰滴咖啡去背.png',
            rent: 450,
            deposit: 888,
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
            day: 15 - 11,
            total: 450 * 4 + 888,
            productCity: "臺北市",
            isComplete: 1,
          },
        ],
        isComplete: 1,
      },
      {
        productAccount: "simon",
        product: [
          {
            cMID: "cccc",
            productID: "商品一",
            productName: "咖啡機",
            images:'/images/product/coffee006冰滴咖啡去背.png',
            rent: 450,
            deposit: 888,
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
            day: 15 - 11,
            total: 450 * 4 + 888,
            productCity: "臺北市",
            isComplete: 1,
          },
          {
            cMID: "dddd",
            productID: "商品2",
            productName: "娃娃",
            images:'/images/product/coffee006冰滴咖啡去背.png',
            rent: 450,
            deposit: 888,
            rentStart: "112/04/11",
            rentEnd: "112/04/15",
            day: 15 - 11,
            total: 450 * 4 + 888,
            productCity: "臺北市",
            isComplete: 1,
          },
        ],
        isComplete: 1,
      },
    ],
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
                  size='large'
                >
                  返回
                </Button>
              )}
              {this.state.current < this.state.steps.length - 1 && (
                <Button type="primary" onClick={() => this.moveSteps(1)}
                size='large'>
                  下一步
                </Button>
              )}
              {this.state.current === this.state.steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                  size='large'
                >
                  結帳
                </Button>
              )}
              <DeletePrompt/>
            </div>
          </div>
          <div className="d-none">sss</div>
        </ConfigProvider>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    let newstate = { ...this.state };
    let newitems = this.state.steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    newstate.items = newitems;
    newstate.steps[0].content = (
      <ShopingCart changePart={this.changePart} changeOne={this.changeOne} data={this.state.cartMap} deleteItem={this.deleteItem} />
    );
    this.setState(newstate);
  };

  moveSteps = (e) => {
    let newstate = { ...this.state };
    newstate.current += e;
    this.setState(newstate);
  };

  changePart = (e, item, index) => {
    let newstate = { ...this.state };
    if(item === 1){
      newstate.cartMap[index].isComplete = 0 
      newstate.cartMap[index].product.map(item=>{
          item.isComplete=0
          return true
        }
      )
    }else{
      newstate.cartMap[index].isComplete = 1
      newstate.cartMap[index].product.map(item=>{
          item.isComplete=1
          return true
        }
      );
    }
    newstate.steps[0].content = (
      <ShopingCart changePart={this.changePart} changeOne={this.changeOne} data={this.state.cartMap} deleteItem={this.deleteItem} />
    );
    this.setState(newstate);
  };
  changeOne = (e, item, index,cartMapIndex) => {
    let newstate = { ...this.state };
    if(item === 1){
      newstate.cartMap[cartMapIndex].product[index].isComplete = 0;
      newstate.cartMap[cartMapIndex].isComplete = 0;
    }else{
      newstate.cartMap[cartMapIndex].product[index].isComplete = 1;
    }
    newstate.steps[0].content = (
      <ShopingCart changePart={this.changePart} changeOne={this.changeOne}  data={this.state.cartMap} deleteItem={this.deleteItem} />
    );
    this.setState(newstate);
  };
  
  deleteItem = (e) =>{
    console.log(e.value)
  }
}

export default Cart;
