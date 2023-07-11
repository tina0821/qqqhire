import React, { Component } from "react";
import { Col, Row } from "antd";
class TradeItemInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="cartFontSize align-items-center">
          <Col xs={8} className="cartFontSize d-flex">{this.props.item.productName}</Col>
          <Col xs={4} className="dateFontSize">
            {this.props.item.rentStart}~{this.props.item.rentEnd}
          </Col>
          <Col xs={3} className="cartFontSize">{this.props.item.day}</Col>
          <Col xs={3} className="cartFontSize d-flex">{this.props.item.rent}</Col>
          <Col xs={3} className="cartFontSize d-flex">{this.props.item.deposit}</Col>
          <Col xs={3} className="cartFontSize d-flex">{this.props.item.total}</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TradeItemInfo;
