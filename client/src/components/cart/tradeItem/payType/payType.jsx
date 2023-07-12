import React, { Component } from "react";
import paymentMethod from "../../../../data/paymentMethod.json";
import { Select, Input, Space } from "antd";
class PayType extends Component {
  render() {
    return (
      <React.Fragment>
        <Space.Compact className="cartFontSize p-3 align-items-center d-flex ">
          <Select
            style={{ width: "20%", fontStyle: "900" }}
            defaultValue={"請選擇付款方式"}
            fieldNames={{ label: "paymentMethod", value: "payTypeEngName" }}
            options={paymentMethod}
            onChange={(e) => {
            }}
          />
          <Input />
        </Space.Compact>
      </React.Fragment>
    );
  }
}

export default PayType;
