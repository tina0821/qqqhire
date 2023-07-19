// Historyorder.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetail from './Orderdetail';
import Ordertable from './ordertable';
import { getOrderStatus } from './orderutils'; // 引入共用函式

const Historyorder = () => {
  const [tradeItems, setTradeItems] = useState([]);
  const [selectedTradeItemId, setSelectedTradeItemId] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);

  const useract = localStorage.getItem('userInfo');
  const user = useract ? useract.slice(1, -1) : '';

  const fetchTradeItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/myorder/${user}`);
      setTradeItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTradeItems();
  }, []);

  const handleDetail = (tradeItemId) => {
    setSelectedTradeItemId(tradeItemId);
    setShowOrderDetail(true);
  };

  const handleBack = () => {
    setSelectedTradeItemId(null);
    setShowOrderDetail(false);
  };

  const filterState = (state) => state > 2; // 過濾狀態為大於2的訂單

  return (
    <div className="order-component">
      {showOrderDetail ? (
        <OrderDetail tradeitemId={selectedTradeItemId} tradeitems={tradeItems} handleBack={handleBack} />
      ) : (
        <Ordertable tradeItems={tradeItems} filterState={filterState} handleDetail={handleDetail} />
      )}
    </div>
  );
};

export default Historyorder;