// Order.js
import React, { useState } from 'react';
import Orderbtn from '../components/MemberCentre/order/orderbtn';
import './centre.scss';

function Order() {
  const [displayedComponent, setDisplayedComponent] = useState('Myorder');
  const handleButtonClick = (component) => {
    setDisplayedComponent(component);
  };

  return (
    <div className="bgset">
        <div className="text">
          <div className="title">| 會員中心 |</div>
          <div>訂單追蹤</div>
        </div>
        <Orderbtn displayedComponent={displayedComponent} handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default Order;