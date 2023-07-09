import React, { Component } from "react";
class PostAddress extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-12 p-4 d-flex align-items-center">
          寄送地址:
          <select
            name="type"
            id="CityName"
            onChange={(e) => {
              this.props.data.changeCityCounty(e.target.value);
            }}
            className="ms-3 me-3 p-1"
          >
            {this.props.data.state.cityCountyData.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.CityName}
                </option>
              );
            })}
          </select>
          <select name="type" id="areaName" className="me-3 p-1">
            {this.props.data.state.chooseCityCountyData.AreaList.map(
              (item, index) => {
                return (
                  <option key={index} value={item.AreaName}>
                    {item.AreaName}
                  </option>
                );
              }
            )}
          </select>
          <input
            type="text"
            placeholder="請輸入地址"
            className=""
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

export default PostAddress;
