import React, { Component } from "react";
import {} from "antd";
class TotalInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          共
          <span className="text-danger">
            {this.props.data.state.productLength}
          </span>
          商品，總金額:
          <span className="text-danger">
            {this.props.data.state.totalMoney}
          </span>
          元
        </div>
      </React.Fragment>
    );
  }
}

export default TotalInfo;
