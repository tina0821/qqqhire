import React from 'react';
import miscImage from '../assets/img/misc/wave.jpg';
import Myorder from '../components/MemberCentre/order/myorder';
import './centre.scss'; // 匯入 Order.scss 檔案

function Order() {
  return (
    <div className="bgset">
      <div>
        <div className="text">
          <div className="title">| 會員中心 |</div>
          <div>訂單追蹤</div>
        </div>
      </div>
      <Myorder />
    </div>
  );
}

export default Order;