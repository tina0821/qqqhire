// Order.js
import React, { useState } from 'react';
import Cmgbtn from '../components/MemberCentre/cmmgmt/cmgbtn';
import './centre.scss';

function Mypro() {
  const [displayedComponent, setDisplayedComponent] = useState('Mycm');
  const handleButtonClick = (component) => {
    setDisplayedComponent(component);
  };

  return (
    <div className="bgset">
      <div>
        <div className="text">
          <div className="title">| 會員中心 |</div>
          <div>商品管理</div>
        </div>
        <Cmgbtn displayedComponent={displayedComponent} handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Mypro;