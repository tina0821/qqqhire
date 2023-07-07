// ButtonSection.js
import React from 'react';
import Myorder from './orderpage/myorder';
import Historyorder from './orderpage/historyorder';

const Orderbtn = ({ displayedComponent, handleButtonClick }) => {
  return (
    <div>
      <div className="btnset">
        <button onClick={() => handleButtonClick('Myorder')} className={displayedComponent === 'Myorder' ? 'active' : ''}>
          我的訂單
        </button>
        <button onClick={() => handleButtonClick('Historyorder')} className={displayedComponent === 'Historyorder' ? 'active' : ''}>
          歷史訂單
        </button>
      </div>
      {displayedComponent === 'Myorder' && <Myorder />}
      {displayedComponent === 'Historyorder' && <Historyorder />}
    </div>
  );
};

export default Orderbtn;