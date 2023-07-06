React是一頁式，最後大家的會合在一起，套入各種CSS，所以不可以用標籤命名

================================ 分離SCSS前-order.jsx ================================

import React from 'react';
import miscImage from '../assets/img/misc/wave.jpg';
import Myorder from '../components/MemberCentre/order/myorder';

function Order() {
  const divStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${miscImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '10vh', // 距離網頁頂部的距離
  };

  const textStyle = {
    textAlign: 'center',
    color: '#021434',
    fontSize: '2rem',
    margin: '20px',
  };

  const titleStyle = {
    color: '#0B7597',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '20px',
  };

  return (
    <div style={divStyle}>
      <div>
        <div style={textStyle}>
          <div style={titleStyle}>| 會員中心 |</div>
          <div>訂單追蹤</div>
        </div>
      </div>
      <Myorder />
    </div>
  );
}

export default Order;


================================ 分離SCSS後-order.jsx ================================

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