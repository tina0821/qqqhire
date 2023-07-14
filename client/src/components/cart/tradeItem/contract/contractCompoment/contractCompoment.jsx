import React, { Component } from "react";
import { ConfigProvider, Row, Col } from "antd";
class ContractCompoment extends Component {
  state = {};
  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            fontSizeHeading1: "3rem",
            fontSizeHeading2: "2.5rem",
          },
        }}
      >
        <Col span={24}>
          <h1>海爾出租 租賃契約</h1>
        </Col>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>立契約書人：</h2>
          </Col>
          <ul>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                承租人：<span class="text-danger">session.name</span>
                <span class="text-dark">(以下簡稱甲方)</span>
              </li>
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                出租人：
                <span class="text-danger">{this.props.productAccount}</span>
                <span class="text-dark">(以下簡稱乙方)</span>
              </li>
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>承租品明細：</h2>
          </Col>
          <ul>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                出租品項：
                <span class="text-danger">{this.props.item.productName}</span>
              </li>
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                承租起迄日：
                <span class="text-dark">自</span>
                <span class="text-danger">
                  民國
                  <span class="rentStart">
                    {new Date(this.props.item.rentStart).getFullYear() - 1911}年
                    {new Date(this.props.item.rentStart).getMonth() + 1}月
                    {new Date(this.props.item.rentStart).getDate()}日
                  </span>
                </span>
                <span class="text-dark">至</span>
                <span class="text-danger">
                  民國
                  <span class="rentEnd">
                    {new Date(this.props.item.rentEnd).getFullYear() - 1911}年
                    {new Date(this.props.item.rentEnd).getMonth() + 1}月
                    {new Date(this.props.item.rentEnd).getDate()}日
                  </span>
                </span>
                <span class="text-dark">， 共</span>
                <span class="text-danger countDate">{this.props.item.day}</span>
                <span class="text-dark">天</span>
              </li>
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                租金：
                <span class="text-danger">
                  新臺幣
                  <span id="renterPrice2">{this.props.item.rent}</span>
                </span>
                <span class="text-dark">元</span>
              </li>
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                押金：
                <span class="text-danger">
                  新臺幣
                  <span>{this.props.item.deposit}</span>
                </span>
                <span class="text-dark">元</span>
              </li>
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                租公收取租金+押金， 共
                <span class="text-danger">
                  新臺幣
                  <span id="totalPrice">{this.props.item.total}</span>
                </span>
                <span class="text-dark">元</span>
              </li>
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>歸還時確認無誤後，退還押金</li>
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>
              茲因甲乙雙方進行家電租賃乙事，雙方特立本契約書，其協議範圍為本契約書指定品項之承租事宜，雙方同意按下列之約定進行各項事宜：
            </h2>
          </Col>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>第一條 租賃協議：</h2>
          </Col>
          <ul>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              一、產品租金
            </Col>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>新臺幣{this.props.item.rent}元</li>
            </Col>
          </ul>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              二、甲方如需延長承租時間，應提前確認產品後續無人承租，方可續租，並需提前於歸還日前12小時提出延長承租之要求，至多以延長兩次為限。(若有不可抗力之因素致無法如期歸還者除外)
            </Col>
          </ul>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              三、本協議書乙式貳份，甲乙雙方各執正本乙份。
            </Col>
          </ul>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              四、甲方於租賃前,應主動告知乙方所清潔區域是否有人感染法定傳染病,以便乙方後續清潔事宜。
            </Col>
          </ul>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              五、如有本協議未盡之事宜，得經由雙方共同合議解決。
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>第二條 損壞賠償：</h2>
          </Col>
          <ul class="">
            <Col
              span={24}
              style={{
                display: "flex",
                textAlign: "start",
                textAlign: "start",
              }}
            >
              甲方承租前，需確實檢查品項功能正常，乙方亦須主動告知產品現狀，如非正常使用以致損壞，甲方需依實際維修費用照價賠償於乙方。
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>第三條 產品點交表：(請務必確認產品功能正常)</h2>
          </Col>
          <ul>
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                <div class="checkedlist hp-form-group col-sm-12">
                  <div class="filter-checkbox display-f">
                    <input
                      class="img40"
                      type="checkbox"
                      name=""
                      checked=""
                      disabled=""
                    />
                    <label for="current-available">
                      <span class="text-danger">
                        {this.props.item.productName}
                      </span>
                      <span class="text-dark">(本體+配件 共</span>
                      <span class="text-danger">1</span>
                      <span class="blaxck">項)</span>
                    </label>
                  </div>
                </div>
              </li>
            </Col>
            <li>※若產品含有電子晶片，切勿碰水，如造成損壞依賠償之規定進行。</li>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>第四條 違約處理：</h2>
          </Col>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li>
                甲方租借如逾期，若未提前12小時提出延長承租之要求，則需支付產品租金兩倍罰金於乙方。(若有不可抗力之因素致無法如期歸還者除外)
              </li>
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>第五條 歸還流程:</h2>
          </Col>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <span class="text-dark">甲方</span>
              <span class="text-danger">session.name</span>
              <span class="text-dark">於民國 </span>
              <span class="text-danger rentEnd">
                {new Date(this.props.item.rentEnd).getFullYear() - 1911}年
                {new Date(this.props.item.rentEnd).getMonth() + 1}月
                {new Date(this.props.item.rentEnd).getDate()}日
              </span>
              <span class="text-dark">
                歸還產品後，乙方確認無誤即完成歸還流程。
              </span>
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={24} style={{ display: "flex", textAlign: "start" }}>
            <h2>第六條</h2>
          </Col>
          <ul class="">
            <Col span={24} style={{ display: "flex", textAlign: "start" }}>
              <li class="text-dark">
                如因本契約所發生之一切爭議，如有訴訟之必要，雙方合議由臺灣臺北地方法院為第一審管轄法院。
              </li>
            </Col>
          </ul>
        </Row>
        <Row>
          <Col span={12}>
            <Row>
              <Col span={24} style={{ display: "flex" }}>
                <h2>甲方</h2>
              </Col>
              <ul class="list">
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    姓名：
                    <span class="text-danger" id="name">
                      session Name
                    </span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    身份證字號：
                    <span class="text-danger" id="id_number">
                      xxxxxxx
                    </span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    地址：
                    <span class="text-danger">
                      {this.props.item.productName}
                    </span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    行動電話：
                    <span class="text-danger" id="phone_number">
                      {this.props.item.productName}
                    </span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    E-MAIL：
                    <span class="text-danger">
                      {this.props.item.productName}
                    </span>
                  </li>
                </Col>
              </ul>
            </Row>
          </Col>
          <Col span={12} style={{ display: "flex", textAlign: "start" }}>
            <Row>
              <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                <h2>乙方</h2>
              </Col>
              <ul class="list">
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    姓名：<span class="text-danger">session Name</span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    身份證字號：<span class="text-danger">ssssss</span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    地址：<span class="text-danger">sssssss</span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    行動電話：<span class="text-danger">sssssss</span>
                  </li>
                </Col>
                <Col span={24} style={{ display: "flex", textAlign: "start" }}>
                  <li>
                    E-MAIL：<span class="text-danger">ssssss</span>
                  </li>
                </Col>
              </ul>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span>中華民國</span>
            <span class="year">{new Date().getFullYear() - 1911} 年 </span>
            <span class="month">{new Date().getMonth() + 1} 月 </span>
            <span class="day">{new Date().getDate()} 日</span>
          </Col>
        </Row>
      </ConfigProvider>
    );
  }
}

export default ContractCompoment;
