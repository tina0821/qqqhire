import React, { useState } from 'react';
import axios from 'axios';

function Popbox({ tradeitemId, onCancel }) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCancelConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleCancelConfirm = async () => {
    console.log("Selected Trade Item ID:", tradeitemId);
    try {
      await axios.post('http://localhost:8000/api/cancelOrder', { tradeitemId });
      onCancel(tradeitemId);
    } catch (error) {
      console.log(error);
    }
    setIsConfirmationOpen(false);
  };

  return (
    <>
      {isConfirmationOpen && (
        <div className="conf-mol">
          <div className="conf-cont">
            <p>是否確定取消該筆訂單？</p>          
            <div className="conf-btn">
              <button id='chkbtn' onClick={handleCancelConfirmation}>取消</button>
              <button id='chkbtn' onClick={handleCancelConfirm}>確定</button>
            </div>
          </div>
        </div>
      )}
      <button id='actbtn' onClick={() => setIsConfirmationOpen(true)}>取消</button>
    </>
  );
}

export default Popbox;