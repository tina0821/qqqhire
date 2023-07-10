import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Myorder() {
  const [tradeitems, setTradeitems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/myorder');
      const tradeitems = response.data;
      console.log(tradeitems);
      setTradeitems(tradeitems);
    } catch (error) {
      console.log(error);
    }
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
          {tradeitems.map((tradeitem) => (
            <tr id='trtd' key={tradeitem.tradeitemId}>
              <td>{tradeitem.tradeitemId}</td>
              <td>{tradeitem.productName}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {tradeitem.state === 0
                  ? '等待回應中'
                  : tradeitem.state === 1
                    ? '等待租借中'
                    : tradeitem.state === 2
                      ? '租借中'
                      : tradeitem.state
                }
              </td>
              <td>
                取消
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default Myorder;