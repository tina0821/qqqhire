import React, { Component } from "react";
import ProductInfo from "./productInfo/index";
import Listname from "../listname/listname";
import { Link } from "react-router-dom";

class ShopingCart extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.state.cartMap.map((item, index) => {
          return (
            this.props.data.state.cartMap[index].product.length !== 0 && (
              <div key={item.productAccount}>
                <div className="gridActive align-items-center">
                  <input
                    className="imgActive"
                    type="checkbox"
                    checked={item.iscomplete}
                    onChange={(e) => {
                      this.props.data.changePart(e, item.iscomplete, index);
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
                <div className="likeHr d-flex"></div>
                <Listname type={0}/>
                <ProductInfo
                  data={item.product}
                  cartMapIndex={index}
                  changeOne={this.props.data.changeOne}
                  showDeleteWindow={this.props.data.showDeleteWindow}
                />
                <div className="likeHr d-flex"></div>
              </div>
            )
          );
        })}
        <div className="d-flex col-12 align-items-center">
          <input
            id="all"
            className="imgActive ps-4"
            type="checkbox"
            checked={this.props.data.state.iscomplete && this.props.data.state.iscomplete}
            onChange={() => {
              this.props.data.changeAll(
                this.props.data.state.iscomplete && this.props.data.state.iscomplete
              );
            }}
          />
          <label htmlFor="all" className="cursorPointer">
            <div>全選</div>
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default ShopingCart;
