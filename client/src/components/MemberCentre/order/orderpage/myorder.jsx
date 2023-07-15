import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetail from './Orderdetail';

const MyOrder = () => {
  const [tradeItems, setTradeItems] = useState([]);
  const [selectedTradeItemId, setSelectedTradeItemId] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);

  useEffect(() => {
    fetchTradeItems();
  }, []);

  const fetchTradeItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/myorder/3x7Y90');
      setTradeItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getOrderStatus = (state) => {
    if (state === 0) {
      return '等待回應中';
    } else if (state === 1) {
      return '等待租借中';
    } else if (state === 2) {
      return '租借中';
    } else {
      return state;
    }
  };

  const handleDetail = (tradeItemId) => {
    setSelectedTradeItemId(tradeItemId);
    setShowOrderDetail(true);
  };

  const handleBack = () => {
    setSelectedTradeItemId(null);
    setShowOrderDetail(false);
  };

  const limitProductName = (productName) => {
    const maxChars = 6;
    if (productName.length <= maxChars) {
      return productName;
    }
    const truncated = productName.substr(0, maxChars);
    const remainder = productName.substr(maxChars);
    return (
      <>
        {truncated}
        <br />
        {remainder}
      </>
    );
  };

  const calculateDays = (rentStart, rentEnd) => {
    const start = new Date(rentStart);
    const end = new Date(rentEnd);
    const timeDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return timeDiff;
  };

  const uniqueTradeItems = tradeItems.filter(
    (tradeItem, index, self) => self.findIndex((t) => t.tradeitemId === tradeItem.tradeitemId) === index
  );

  if (showOrderDetail) {
    return (
      <OrderDetail tradeitemId={selectedTradeItemId} tradeitems={tradeItems} handleBack={handleBack} />
    );
  }

  return (
    <div className="order-component">
      {selectedTradeItemId ? (
        <OrderDetail tradeitemId={selectedTradeItemId} tradeitems={tradeItems} />
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>商品</th>
              <th>預約日期</th>
              <th>歸還日期</th>
              <th>天數</th>
              <th>總金額</th>
              <th>訂單狀態</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {uniqueTradeItems.map((tradeItem) => {
              if (tradeItem.state < 3) {
                // 訂單狀態
                const orderStatus = getOrderStatus(tradeItem.state);
                const rentTotal = tradeItems
                  .filter((item) => item.tradeitemId === tradeItem.tradeitemId)
                  .reduce((total, item) => total + item.rent, 0);
                const depositTotal = tradeItems
                  .filter((item) => item.tradeitemId === tradeItem.tradeitemId)
                  .reduce((total, item) => total + item.deposit, 0);
                return (
                  <tr id="trtd" key={tradeItem.tradeitemId}>
                    <td>{tradeItem.tradeitemId}</td>
                    <td>{limitProductName(tradeItem.productName)}</td>
                    <td>{new Date(tradeItem.rentStart).toLocaleDateString()}</td>
                    <td>{new Date(tradeItem.rentEnd).toLocaleDateString()}</td>
                    <td>{calculateDays(tradeItem.rentStart, tradeItem.rentEnd)}</td>
                    <td>{rentTotal + depositTotal}</td>
                    <td>{orderStatus}</td>
                    <td>
                      <button id='morebtn' onClick={() => handleDetail(tradeItem.tradeitemId)}>詳細</button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyOrder;