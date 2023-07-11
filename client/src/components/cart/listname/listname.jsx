import React, { Component } from "react";
import { Col, Row } from "antd";
class Listname extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.type === 0 && (
          <Row gutter={16} align={"middle"} className="cartFontSize">
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="cartFontSize">
              圖片
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} className="cartFontSize">
              商品名稱
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} className="dateFontSize">
              日期
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="cartFontSize">
              天數
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="cartFontSize">
              租金/天
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="cartFontSize">
              押金
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="cartFontSize">
              總價
            </Col>
          </Row>
        )}
        {this.props.type === 1 && (
          <Row className="cartFontSize fw-bolder">
            <Col xs={8} className="cartFontSize">商品名稱</Col>
            <Col xs={4} className="cartFontSize">日期</Col>
            <Col xs={3} className="cartFontSize">天數</Col>
            <Col xs={3} className="cartFontSize">租金/天</Col>
            <Col xs={3} className="cartFontSize">押金</Col>
            <Col xs={3} className="cartFontSize">總價</Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

export default Listname;
