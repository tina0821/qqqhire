// Order.js
import React, { useState } from 'react';
import BtnSection from '../components/MemberCentre/cmmgmt/btnsection';
import './centre.scss';

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
        <BtnSection displayedComponent={displayedComponent} handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Order;