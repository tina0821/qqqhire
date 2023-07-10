import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Myorder() {
  const [tradeitems, setTradeitems] = useState([]);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedTradeitemId, setSelectedTradeitemId] = useState(null);

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
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  const handleCancel = (tradeitemId) => {
    setSelectedTradeitemId(tradeitemId);
    setIsConfirmationOpen(true);
  };

  const handleCancelConfirmation = () => {
    setIsConfirmationOpen(false);
  };

  const handleCancelConfirm = async () => {
    console.log("Selected Trade Item ID:", selectedTradeitemId);
    try {
      await axios.post('http://localhost:8000/api/cancelOrder', { tradeitemId: selectedTradeitemId })


      setTradeitems((prevTradeitems) =>
        prevTradeitems.map((tradeitem) => {
          if (tradeitem.tradeitemId === selectedTradeitemId) {
            return { ...tradeitem, state: 4 };
          }
          return tradeitem;
        })
      );
    } catch (error) {
      console.log(error);
    }
    setIsConfirmationOpen(false);
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
                  <button id="actbtn" onClick={() => handleCancel(tradeitem.tradeitemId)}>
                    取消
                  </button>
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
            return null;
          })}
        </tbody>
      </table>

      {isConfirmationOpen && (
        <div className="confirmation-modal">
          <div className="confirmation-content">
            <p>是否確定取消該筆訂單？</p>
            <div className="confirmation-buttons">
              <button onClick={handleCancelConfirmation}>取消</button>
              <button onClick={handleCancelConfirm}>確定</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Myorder;