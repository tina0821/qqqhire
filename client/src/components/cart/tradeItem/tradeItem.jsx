import React, { Component } from "react";
import Listname from "../listname/listname";
import TradeItemInfo from "./tradeItemInfo/tradeItemInfo";
import ShippingMethod from "./ShippingMethod/ShippingMethod";
import PostAddress from "./postAddress/postAddress";
import HomeDelivery from "./homeDelivery/homeDelivery";
import InStorePickup from "./InStorePickup/InStorePickup";
import { Col, Row } from "antd";
// import Test from "./test/test";

class TradeItem extends Component {
  render() {
    // console.log(this.props.data.state.chooseAreaList);
    return (
      <React.Fragment>
        {this.props.data.state.tradeItem &&
          this.props.data.state.tradeItem.map((item, index) => {
            return (
              <React.Fragment key={item.productAccount}>
                <Row className={"d-flex fw-bolder"}>
                  <Col xs={24} className="cartFontSize line mt-3">
                    {item.productAccount}的商品
                  </Col>
                </Row>
                {this.props.data.state.tradeItem[index].product.length !==
                  0 && (
                  <div key={item.productAccount} className="line">
                    {/* 商品list說明 */}
                    <Listname type={1} />
                    {/* 列出訂單裡的商品 */}
                    {item.product.map((item) => {
                      return <TradeItemInfo item={item} key={item.cartMapId} />;
                    })}
                  </div>
                )}
                <div className="d-flex flex-wrap justify-content-between mt-5 pb-5 align-items-center">
                  <div className="col-12 p-4 fw-bolder">寄送資訊</div>
                  {/* 寄送方式選擇 */}
                  <ShippingMethod data={this.props.data} />
                  {/* 依寄送選擇顯示表單 */}
                  {this.props.data.state.shippingMethod === "post" && (
                    <PostAddress data={this.props.data} />
                  )}
                  {this.props.data.state.shippingMethod === "homeDelivery" && (
                    <HomeDelivery data={this.props.data} />
                  )}
                  {this.props.data.state.shippingMethod === "InStorePickup" && (
                    <InStorePickup data={this.props.data} />
                  )}
                </div>
              </React.Fragment>
            );
          })}
      </React.Fragment>
    );
  }
}

export default TradeItem;
