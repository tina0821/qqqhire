import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Historyorder() {
  const [tradeitems, setTradeitems] = useState([]);

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

    fetchData(); // 增加fetchData函式的內部定義

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 移除fetchData依賴數組

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
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
            if (tradeitem.state >= 3) {
              return (
                <tr id="trtd" key={tradeitem.tradeitemId}>
                  <td>{tradeitem.tradeitemId}</td>
                  <td>{tradeitem.productName}</td>
                  <td>{tradeitem.rentStart}</td>
                  <td>{tradeitem.rentEnd}</td>
                  <td>{tradeitem.rent}</td>
                  <td>{tradeitem.deposit}</td>
                  <td>{tradeitem.state === 3
                    ? '訂單已完成'
                    : tradeitem.state === 4
                    ? '訂單已取消'
                    : tradeitem.state}</td>
                  <td>申訴</td>
                </tr>
              );
            }
            return null; // 不符合條件的資料返回null
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Historyorder;