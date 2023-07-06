import React, { Component } from "react";
import ProductInfo from "../shopingCart/productInfo/index";
import { Link } from "react-router-dom";

class TradeItem extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div className="gridActive pt-3 pb-3 cartFontSize">
          <div></div>
          <div>圖片</div>
          <div>商品名稱</div>
          <div>日期</div>
          <div>天數</div>
          <div>租金/天</div>
          <div>押金</div>
          <div>總價</div>
        </div>
        {this.props.tradeItem.map((item, index) => {
          return (
            this.props.tradeItem[index].product.length !== 0 && (
              <div key={item.productAccount}>
                <div className="gridActive align-items-center">
                </div>
                <ProductInfo
                  data={item.product}
                  cartMapIndex={index}
                  changeOne={this.props.changeOne}
                  showDeleteWindow={this.props.showDeleteWindow}
                />
                <div className="likeHr d-flex"></div>
              </div>
            )
          );
        })} */}
      </React.Fragment>
    );
  }
}

export default TradeItem;
