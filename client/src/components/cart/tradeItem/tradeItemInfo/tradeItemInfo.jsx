import React, { Component } from "react";
class TradeItemInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="gridActive3 ps-5 pt-3 pb-3 cartFontSize  align-items-center">
          <div className=" d-flex">{this.props.item.productName}</div>
          <div className="dateFontSize">
            {this.props.item.rentStart}~{this.props.item.rentEnd}
          </div>
          <div className="">{this.props.item.day}</div>
          <div className=" d-flex">{this.props.item.rent}</div>
          <div className=" d-flex">{this.props.item.deposit}</div>
          <div className=" d-flex">{this.props.item.total}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default TradeItemInfo;
