import React, { Component } from "react";
import Listname from "../listname/listname";
import TradeItemInfo from "./tradeItemInfo/tradeItemInfo";
import ShippingMethod from "./ShippingMethod/ShippingMethod";
import { Col, Row, Divider } from "antd";
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
                  <Col xs={24} className="cartFontSize mt-4">
                    {item.productAccount}的商品
                  </Col>
                  <Divider className="borderclass" />
                </Row>
                {this.props.data.state.tradeItem[index].product.length !==
                  0 && (
                  <React.Fragment key={item.productAccount}>
                    {/* 商品list說明 */}
                    <Listname type={1} />
                    {/* 列出訂單裡的商品 */}
                    {item.product.map((item) => {
                      return <TradeItemInfo item={item} key={item.cartMapId} />;
                    })}
                    <Divider className="borderclass" />
                  </React.Fragment>
                )}
                <Row>
                  <Col xs={24} className="cartFontSize fw-bolder">
                    寄送資訊
                  </Col>
                  {/* 寄送方式元件 */}
                  <Col xs={24} className="cartFontSize">
                    <ShippingMethod data={this.props.data} />
                  </Col>
                </Row>
              </React.Fragment>
            );
          })}
      </React.Fragment>
    );
  }
}

export default TradeItem;
