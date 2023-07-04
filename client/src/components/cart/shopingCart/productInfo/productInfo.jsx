import { Button } from "antd";
import React, { Component } from "react";

class ProductInfo extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((item, index) => {
          return (
            <React.Fragment key={item.cMID}>
              <div               
                className="gridActive justify-content-between align-items-center ps-2 pe-5 pt-3 pb-3 cartFontSize"
              >
                <input
                  type="checkbox"
                  className="imgActive"
                  value={item.cMID}
                  checked={item.isComplete}
                  onChange={(e) => {
                    this.props.changeOne(
                      e,
                      item.isComplete,
                      index,
                      this.props.cartMapIndex
                    );
                  }}
                />
                <img
                  className="img100"
                  src={item.images}
                  alt="aa"
                />
                <div>{item.productName}</div>
                <div className="dateFontSize">{item.rentStart}</div>
                <div className="dateFontSize">{item.rentEnd}</div>
                <div>{item.day}</div>
                <div>{item.rent}</div>
                <div>{item.deposit}</div>
                <div>{item.total}</div>
                <Button className="" type="primary" size="large" danger={true} onClick={(a)=>{this.props.deleteItem(a)}} >X</Button>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ProductInfo;
