import React, { Component } from "react";
//寄送方式資料表
import shippingMethod from "../../../../data/shippingMethod.json";
import { Select, Button, Space, Input } from "antd";
import { handleGetStore } from "../test/test";
class ShippingMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //寄送選擇
      shippingMethod: shippingMethod,
      //預設寄送方式
      chooseShippingMethod: "",
      //存地址資料之後回傳主頁面
      address: "",
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="cartFontSize align-items-center d-flex col-12 ps-4">
          寄送方式:
          <Space.Compact>
            <Select
              style={{ width: 180 }}
              size="large"
              className="ms-4"
              defaultValue={"請選擇寄送方式"}
              fieldNames={{ label: "method" }}
              options={this.state.shippingMethod}
              onChange={(e) => {
                this.changeShippingMethod(e);
              }}
            />
            <Input style={{ width: 700 }} defaultValue={this.state.address} />
          </Space.Compact>
          {this.state.chooseShippingMethod &&
            this.state.chooseShippingMethod !== "BlackCat" && (
              <Button
                className="cartFontSize ms-4"
                size="large"
                onClick={() => {
                  handleGetStore(this.state.chooseShippingMethod);
                  this.catchMessage();
                }}
              >
                請選擇地址
              </Button>
            )}
        </div>
      </React.Fragment>
    );
  }
  componentDidUpdate() {
    console.log(this.state.chooseShippingMethod);
  }
  catchMessage = () => {
    //重製session
    localStorage.removeItem("address");
    localStorage.setItem("address", "");
    //執行監聽
    this.keepListenMessage(0);
  };

  keepListenMessage = (i) => {
    let newstate = { ...this.state };
    //session空值
    let newAddress = localStorage.getItem("address");
    console.log(newAddress ? 1 : 0);
    //判斷session有無取得的資訊
    if(newAddress){
      newstate.address = newAddress
      this.setState(newstate)
    }else{
      console.log(i++)
      setTimeout(()=>{this.keepListenMessage(i)},1000)
    }
  };

  changeShippingMethod = (target) => {
    let newstate = { ...this.state };
    newstate.chooseShippingMethod = target;
    this.setState(newstate);
  };
}

export default ShippingMethod;
