import React, { Component } from "react";
class Listname extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.type === 0 && (
          <div className="gridActive ps-1 pt-3 pb-3 cartFontSize fw-bolder">
            <div>勾選</div>
            <div className="displayNone">圖片</div>
            <div>商品名稱</div>
            <div>日期</div>
            <div>天數</div>
            <div>租金/天</div>
            <div>押金</div>
            <div>總價</div>
          </div>
        )}
        {this.props.type === 1 && (
          <div className="gridActive3 ps-5 pt-3 pb-3 cartFontSize fw-bolder">
            <div className="d-flex">商品名稱</div>
            <div className="">日期</div>
            <div className="">天數</div>
            <div className="d-flex">租金/天</div>
            <div className="d-flex">押金</div>
            <div className="d-flex">總價</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Listname;
