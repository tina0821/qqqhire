import React, { useState, useEffect } from 'react';
import Orderbtn from '../components/MemberCentre/order/orderbtn';
import Notlogin from '../components/MemberCentre/notlogin';
import './centre.scss';

function Order() {
  const [displayedComponent, setDisplayedComponent] = useState('Myorder');
  const handleButtonClick = (component) => {
    setDisplayedComponent(component);
  };

  // 增加 useEffect，用於檢查使用者登入狀態
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      // 若未登入，可以在這裡做相應的處理，例如顯示"請先登入"的內容
      document.getElementById('not-logged-in-message').style.display = 'block';
    } else {
      // 若已登入，可以在這裡做相應的處理，例如顯示正常的內容
      document.getElementById('logged-in-content').style.display = 'block';
    }
  }, []);

  return (
    <div>
      {/* 顯示未登入時的訊息 */}
      <div id="not-logged-in-message" style={{ display: 'none' }}>
      <div className="logbg">
      <div className="glass">
          <Notlogin />
      </div>
      </div>
      </div>
      {/* 顯示已登入時的內容 */}
      <div id="logged-in-content" style={{ display: 'none' }}>
        <div className="bgset">
          <div className="text">
            <div className="title">| 會員中心 |</div>
            <div>訂單追蹤</div>
          </div>
          <Orderbtn displayedComponent={displayedComponent} handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Order;
