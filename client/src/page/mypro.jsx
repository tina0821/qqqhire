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