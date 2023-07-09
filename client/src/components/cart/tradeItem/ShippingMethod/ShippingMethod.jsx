import React, { Component } from "react";
//寄送方式資料表
import shippingMethod from "../../../../data/shippingMethod.json";
class ShippingMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //寄送選擇
      shippingMethod: shippingMethod,
      //預設寄送方式
      chooseShippingMethod:"請選擇寄送方式"
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-12 p-4 d-flex align-items-center">
          寄送方式:
          <select
            className="ms-3 me-3 p-1"
            name=""
            id="shippingMethod"
            onClick={(e) => {
              this.props.data.changeShippingMethod(e.target.value);
            }}
          >
            {this.state.shippingMethod.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.method}
                </option>
              );
            })}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default ShippingMethod;
