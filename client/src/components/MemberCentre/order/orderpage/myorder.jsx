import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../order.scss';

function Myorder() {
  const [tradeitems, setTradeitems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/tradeitems');
      const tradeitems = response.data;
      console.log(tradeitems);
      setTradeitems(tradeitems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {tradeitems.map((tradeitem) => (
        <div key={tradeitem.tradeitemId} className="trade-item">
          <div>
            <h4>訂單編號</h4>
            <p>{tradeitem.tradeitemId}</p>
          </div>
          <div>
            <h4>商品</h4>
            <p>{tradeitem.productName}</p>
          </div>
          <div>
            <h4>訂單狀態</h4>
            <p>
              {tradeitem.state === 0
                ? '等待回應中'
                : tradeitem.state === 1
                ? '等待租借中'
                : tradeitem.state}
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
  
}

export default Myorder;