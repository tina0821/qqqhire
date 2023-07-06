import React, { Component } from "react";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

class ProductInfo extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((item, index) => {
          return (
            <React.Fragment key={item.cMID}>
              <div className="gridActive pt-3 pb-3 cartFontSize  align-items-center">
                <input
                  type="checkbox"
                  className="imgActive"
                  value={item.cMID}
                  checked={item.isComplete && item.isComplete}
                  onChange={(e) => {
                    this.props.changeOne(
                      e,
                      item.isComplete ? item.isComplete : 0,
                      index,
                      this.props.cartMapIndex
                    );
                  }}
                />
                <div className="d-flex justify-content-center">
                  <img className="img100" src={item.images} alt="aa" />
                </div>
                <div>{item.productName}</div>
                <div className="dateFontSize">
                  {item.rentStart}
                  <br />~{item.rentEnd}
                </div>
                <div>{item.day}</div>
                <div>{item.rent}</div>
                <div>{item.deposit}</div>
                <div>{item.total}</div>
                <Button
                  type="primary"
                  icon={<CloseOutlined />}
                  shape="circle"
                  value={item.cMID}
                  size="large"
                  danger={true}
                  onClick={() => {
                    this.props.showDeleteWindow(item);
                  }}
                  style={{
                    borderRadius: "50px",
                    width: "50px",
                    height: "50px",
                  }}
                ></Button>
              </div>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ProductInfo;
