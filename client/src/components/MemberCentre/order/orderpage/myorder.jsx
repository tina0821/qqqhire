import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Orderdetail from './Orderdetail';

const Myorder = () => {
  const [tradeitems, setTradeitems] = useState([]);
  // =========== 詳細按鈕 =========== 
  const [selectedTradeitemId, setSelectedTradeitemId] = useState(null);

  const handleDetail = (tradeitemId) => {
    setSelectedTradeitemId(tradeitemId);
  };

  // ====================== 

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
            <th>租金</th>
            <th>押金</th>
            <th>訂單狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {uniqueTradeitems.map((tradeitem) => {
            if (tradeitem.state < 3) {
              const productName = tradeitem.productName.length > 10
                ? tradeitem.productName.slice(0, 10) + '...'
                : tradeitem.productName;

              const orderStatus = getOrderStatus(tradeitem.state);

              return (
                <tr title={tradeitem.productName} id="trtd" key={tradeitem.tradeitemId}>
                  <td>{tradeitem.tradeitemId}</td>
                  <td>{productName}</td>
                  <td>{new Date(tradeitem.rentStart).toLocaleDateString()}</td>
                  <td>{new Date(tradeitem.rentEnd).toLocaleDateString()}</td>
                  <td>{tradeitem.rent}</td>
                  <td>{tradeitem.deposit}</td>
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

export default Myorder;