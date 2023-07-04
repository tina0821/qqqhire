import React, { Component } from "react";
import ProductInfo from "./productInfo/index";
import {Link } from 'react-router-dom';

class ShopingCart extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((item,index) => {
          return (
            <div key={item.productAccount}>
              <div className="gridActive align-items-center">
                <input
                  className="imgActive"
                  type="checkbox"
                  checked={item.isComplete}
                  onChange={(e) => {
                    this.props.changePart(e,item.isComplete,index);
                  }}
                />
                <Link to="/">
                  <img
                    className="imgActive"
                    src="/images/icon/Home.png"
                    alt="ops"
                  />
                </Link>
                <div className="ps-5">{item.productAccount}</div>
                <div className="ps-5">聯絡賣家</div>
              </div>
              <div className="likeHr d-flex" ></div>
              <div className="gridActive pt-3 pb-3 cartFontSize" >
              <div>勾選</div>
              <div>圖片</div>
              <div>商品名稱</div>
              <div>日期</div>
              <div>天數</div>
              <div>租金/天</div>
              <div>押金</div>
              <div>總價</div>
              </div>
              <ProductInfo data={item.product} cartMapIndex={index} changeOne={this.props.changeOne} deleteItem={this.props.deleteItem} />
              <div className="likeHr d-flex" ></div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ShopingCart;

// {
//   this.props.productAccount.map((item, index) => {
//     return (
//       <div key={index}>

//       </div>
//     );
//   });
// }
