import React, { Component } from "react";
import Test from "../test/test";

class InStorePickup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-12 p-4 d-flex align-items-center">
          寄送地址:
          <Test />
          <input
            type="text"
            placeholder="請輸入地址"
            className="ms-3 me-3"
            defaultValue={this.props.data.state.address}
            onBlur={(e) => {
              this.props.data.addAddress(
                e.target.value,
                this.props.data.state.chooseCityCountyData.CityName +
                  document.getElementById("areaName").value +
                  e.target.value
              );
            }}
          />
          {/* 判斷有沒有輸入地址，沒有錯誤計數會+1讓錯誤訊息跳出來 */}
          <div
            className={`text-danger p-3 ${
              this.props.data.state.err[0].count === 0 && "d-none"
            }`}
          >
            地址不能為空!!!
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InStorePickup;
