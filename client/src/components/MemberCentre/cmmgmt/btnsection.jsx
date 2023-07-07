// ButtonSection.js
import React from 'react';
import Mycm from './cmgpage/mycm';
import Rentalreq from './cmgpage/rentalreq';
import Renthistory from './cmgpage/renthistory';
import Rentout from './cmgpage/rentout';

const BtnSection = ({ displayedComponent, handleButtonClick }) => {
  return (
    <div>
      <div className="btnset">
        <button onClick={() => handleButtonClick('Mycm')} className={displayedComponent === 'Mycm' ? 'active' : ''}>
          我的商品
        </button>
        <button onClick={() => handleButtonClick('Rentalreq')} className={displayedComponent === 'Rentalreq' ? 'active' : ''}>
          租借請求
        </button>
        <button onClick={() => handleButtonClick('Renthistory')} className={displayedComponent === 'Renthistory' ? 'active' : ''}>
          出租中
        </button>
        <button onClick={() => handleButtonClick('Rentout')} className={displayedComponent === 'Rentout' ? 'active' : ''}>
          歷史紀錄
        </button>
      </div>
      {displayedComponent === 'Mycm' && <Mycm />}
      {displayedComponent === 'Rentalreq' && <Rentalreq />}
      {displayedComponent === 'Renthistory' && <Renthistory />}
      {displayedComponent === 'Rentout' && <Rentout />}
    </div>
  );
};

export default BtnSection;