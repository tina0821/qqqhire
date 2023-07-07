import React, { useState } from 'react';
// import miscImage from '../assets/img/misc/wave.jpg';
import Myorder from '../components/MemberCentre/order/myorder';
import Historyorder from '../components/MemberCentre/order/historyorder';
import './centre.scss'; // 匯入 Order.scss 檔案

function Order() {
  const [displayedComponent, setDisplayedComponent] = useState('Myorder');

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
          onClick={() => handleButtonClick('Myorder')}
          className={displayedComponent === 'Myorder' ? 'active' : ''}
        >
          我的訂單
        </button>
        <button
          onClick={() => handleButtonClick('Historyorder')}
          className={displayedComponent === 'Historyorder' ? 'active' : ''}
        >
          歷史紀錄
        </button>
        </div>
        {displayedComponent === 'Myorder' && <Myorder />}
        {displayedComponent === 'Historyorder' && <Historyorder />}
      
      </div>
    </div>
  );
}

export default Order;