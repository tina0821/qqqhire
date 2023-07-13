import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Orderdetail from './Orderdetail';

const Myorder = () => {
  const [tradeitems, setTradeitems] = useState([]);
  // =========== 詳細按鈕 =========== 
  const [selectedTradeitemId, setSelectedTradeitemId] = useState(null);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const handleDetail = (tradeitemId) => {
    setSelectedTradeitemId(tradeitemId);
    setShowOrderDetail(true);
  };
  const handleBack = () => {
    setSelectedTradeitemId(null);
    setShowOrderDetail(false);
  };
  // ================================= 

  useEffect(() => {
    const fetchTradeitems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/myorder/3x7Y90');
        setTradeitems(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTradeitems();
  }, []);

  console.log(tradeitems);

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
  // 一筆訂單只顯示一樣商品資訊
  const uniqueTradeitems = tradeitems.filter(
    (tradeitem, index, self) =>
      self.findIndex((t) => t.tradeitemId === tradeitem.tradeitemId) === index
  );
  if (showOrderDetail) {
    return (
      <Orderdetail tradeitemId={selectedTradeitemId} tradeitems={tradeitems} handleBack={handleBack} />
    );
  }

  return (
    <div className="order-component">
      {selectedTradeitemId ? (
        <Orderdetail tradeitemId={selectedTradeitemId} tradeitems={tradeitems} />
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
            {uniqueTradeitems.map((tradeitem) => {
              if (tradeitem.state < 3) {
                const orderStatus = getOrderStatus(tradeitem.state);

                // 计算每个tradeitemId内所有商品的rent总和和deposit总和
                const rentTotal = tradeitems
                  .filter((item) => item.tradeitemId === tradeitem.tradeitemId)
                  .reduce((total, item) => total + item.rent, 0);

                const depositTotal = tradeitems
                  .filter((item) => item.tradeitemId === tradeitem.tradeitemId)
                  .reduce((total, item) => total + item.deposit, 0);

                return (
                  <tr id="trtd" key={tradeitem.tradeitemId}>
                    <td>{tradeitem.tradeitemId}</td>
                    <td>{limitProductName(tradeitem.productName)}</td>
                    <td>{new Date(tradeitem.rentStart).toLocaleDateString()}</td>
                    <td>{new Date(tradeitem.rentEnd).toLocaleDateString()}</td>
                    <td>{calculateDays(tradeitem.rentStart, tradeitem.rentEnd)}</td>
                    <td>{rentTotal + depositTotal}</td>
                    <td>{orderStatus}</td>
                    <td>
                      <button id='actbtn' onClick={() => handleDetail(tradeitem.tradeitemId)}>詳細</button>
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

// 輔助函數：限製商品名稱的字數並插入換行符
function limitProductName(productName) {
  const maxChars = 6; // 最大字數限制
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
}

// 輔助函數：計算日期之間的天數差
function calculateDays(rentStart, rentEnd) {
  const start = new Date(rentStart);
  const end = new Date(rentEnd);
  const timeDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // 计算天数

  return timeDiff;
}

export default Myorder;