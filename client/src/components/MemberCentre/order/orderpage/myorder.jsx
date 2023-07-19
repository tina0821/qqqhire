import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import OrderDetail from './Orderdetail';
import Ordertable from './ordertable';

const MyOrder = () => {
  const [tradeItems, setTradeItems] = useState([]);
  const [selectedTradeItemId, setSelectedTradeItemId] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);

  const useract = localStorage.getItem('userInfo');
  const user = useract ? useract.slice(1, -1) : '';

  const fetchTradeItems = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/myorder/${user}`);
      setTradeItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [user]); // 將 'user' 列入 useCallback 的依賴陣列中

  useEffect(() => {
    fetchTradeItems(); // 在 useEffect 中調用 fetchTradeItems
  }, [fetchTradeItems]); // 將 'fetchTradeItems' 列入 useEffect 的依賴陣列中

  const handleDetail = (tradeItemId) => {
    setSelectedTradeItemId(tradeItemId);
    setShowOrderDetail(true);
  };

  const handleBack = () => {
    setSelectedTradeItemId(null);
    setShowOrderDetail(false);
  };

  const filterState = (state) => state < 3;

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

export default MyOrder;