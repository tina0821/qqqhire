import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Popbox from '../popbox';

const Myorder = () => {
  const [tradeitems, setTradeitems] = useState([]);

  // const handleCancel = (tradeitemId) => {
  //   setTradeitems((prevTradeitems) =>
  //     prevTradeitems.map((tradeitem) => {
  //       if (tradeitem.tradeitemId === tradeitemId) {
  //         return { ...tradeitem, state: 4 };
  //       }
  //       return tradeitem;
  //     })
  //   );
  // };

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
              // let action = null;
              // if (tradeitem.state === 0) {
              //   action = (
              //     <Popbox
              //       tradeitemId={tradeitem.tradeitemId}
              //       onCancel={handleCancel}
              //     />
              //   );
              // }
              return (
                <tr title={tradeitem.productName} id="trtd" key={tradeitem.tradeitemId}>
                  <td>{tradeitem.tradeitemId}</td>
                  <td>{tradeitem.productName.length > 10
                    ? tradeitem.productName.slice(0, 10) + '...'
                    : tradeitem.productName}</td>
                  <td>{new Date(tradeitem.rentStart).toLocaleDateString()}</td>
                  <td>{new Date(tradeitem.rentEnd).toLocaleDateString()}</td>
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
                  {/* <td>{action}</td> */}
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Myorder;