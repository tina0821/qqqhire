import React, { Component } from "react";
import Listname from "../listname/listname";
import TradeItemInfo from "./tradeItemInfo/tradeItemInfo";

class TradeItem extends Component {
  render() {
    console.log(this.props.cityCountyData);
    return (
      <React.Fragment>
        <div className="border-bottom border-dark border-2 fw-bolder p-4">
          商品清單
        </div>
        {this.props.data.state.tradeItem &&
          this.props.data.state.tradeItem.map((item, index) => {
            return (
              <React.Fragment key={item.productAccount}>
                <div className={"d-flex ps-4 pe-4 pt-2 pb-2 fw-bolder"}>
                  {item.productAccount}的商品:
                </div>
                <div
                  className="border-bottom col-12"
                  style={{ borderStyle: "dashed" }}
                ></div>
                {this.props.data.state.tradeItem[index].product.length !==
                  0 && (
                  <div key={item.productAccount}>
                    <Listname type={1} />
                    {item.product.map((item) => {
                      return <TradeItemInfo item={item} key={item.cMID} />;
                    })}
                    <div className="border-bottom border-dark border-2"></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        <div className="d-flex flex-wrap justify-content-between mt-5 pb-5 align-items-center">
        <div className="col-12 p-4 fw-bolder">寄送資訊</div>
        <div className="col-12 p-4 d-flex align-items-center">
                寄送方式:
                <select name="type" className="ms-5">
                  <option value="type1"></option>
                </select>
              </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TradeItem;
