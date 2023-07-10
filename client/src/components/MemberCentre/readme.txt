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


================================ 我的商品頁，按鈕拆成組件前 ================================

import React, { useState } from 'react';
// import miscImage from '../assets/img/misc/wave.jpg';
import Mycm from '../components/MemberCentre/cmmgmt/mycm';
import Rentalreq from '../components/MemberCentre/cmmgmt/rentalreq';
import Renthistory from '../components/MemberCentre/cmmgmt/renthistory';
import Rentout from '../components/MemberCentre/cmmgmt/rentout';
import './centre.scss'; // 匯入 Order.scss 檔案

function Order() {
  const [displayedComponent, setDisplayedComponent] = useState('Mycm');

  const handleButtonClick = (component) => {
    setDisplayedComponent(component);
  };

  return (
    <div className="bgset">
      <div>
        <div className="text">
          <div className="title">| 會員中心 |</div>
          <div>訂單追蹤</div>
        </div>
        <div className="btnset">
        <button
          onClick={() => handleButtonClick('Mycm')}
          className={displayedComponent === 'Mycm' ? 'active' : ''}
        >
          我的商品
        </button>
        <button
          onClick={() => handleButtonClick('Rentalreq')}
          className={displayedComponent === 'Rentalreq' ? 'active' : ''}
        >
          租借請求
        </button>
        <button
          onClick={() => handleButtonClick('Renthistory')}
          className={displayedComponent === 'Renthistory' ? 'active' : ''}
        >
          出租中
        </button>
        <button
          onClick={() => handleButtonClick('Rentout')}
          className={displayedComponent === 'Rentout' ? 'active' : ''}
        >
          歷史紀錄
        </button>
        </div>
        {displayedComponent === 'Mycm' && <Mycm />}
        {displayedComponent === 'Rentalreq' && <Rentalreq />}
        {displayedComponent === 'Renthistory' && <Renthistory />}
        {displayedComponent === 'Rentout' && <Rentout />}
      
      </div>
    </div>
  );
}

export default Order;





================================ 設定取消按鈕前的myorder ================================

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Myorder() {
  const [tradeitems, setTradeitems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/myorder');
        const tradeitems = response.data.map((tradeitem) => ({
          ...tradeitem,
          rentStart: formatDate(tradeitem.rentStart),
          rentEnd: formatDate(tradeitem.rentEnd),
        }));
        console.log(tradeitems);
        setTradeitems(tradeitems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // 增加fetchData函式的內部定義

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 移除fetchData依賴數組

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  const handleCancel = async (tradeitemId) => {
    try {
      await axios.post('http://localhost:8000/api/cancelOrder', { tradeitemId });
      // 在此處執行取消訂單的相關邏輯
      // 例如更新訂單狀態或重新加載資料等
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="order-component">
      <table className="order-table">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>商品</th>
            <th>預約日期</th>
            <th>歸還日期</th>
            <th>租金</th>
            <th>押金</th>
            <th>訂單狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {tradeitems.map((tradeitem) => {
            if (tradeitem.state < 3) {
              let action = null;
              if (tradeitem.state === 0) {
                action = (
                  <button id='actbtn' onClick={() => handleCancel(tradeitem.tradeitemId)}>取消</button>
                );
              }
              
              return (
                <tr id="trtd" key={tradeitem.tradeitemId}>
                  <td>{tradeitem.tradeitemId}</td>
                  <td>{tradeitem.productName}</td>
                  <td>{tradeitem.rentStart}</td>
                  <td>{tradeitem.rentEnd}</td>
                  <td>{tradeitem.rent}</td>
                  <td>{tradeitem.deposit}</td>
                  <td>
                    {tradeitem.state === 0
                      ? '等待回應中'
                      : tradeitem.state === 1
                        ? '等待租借中'
                        : tradeitem.state === 2
                          ? '租借中'
                          : tradeitem.state}
                  </td>
                  <td>{action}</td>
                </tr>
              );
            }
            return null; // 不符合條件的資料返回null
          })}
        </tbody>

      </table>
    </div>
  );
}

export default Myorder;