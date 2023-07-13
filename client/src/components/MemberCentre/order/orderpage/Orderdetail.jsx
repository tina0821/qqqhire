import React from 'react';

const Orderdetail = ({ tradeitemId, tradeitems }) => {
  // 根据 tradeitemId 过滤出包含相同 tradeitemId 的详细信息
  const details = tradeitems.filter((tradeitem) => tradeitem.tradeitemId === tradeitemId);

  return (
    <div>
      <table className="order-table">
        <thead>
          <tr>
            <th>商品圖片</th>
            <th>商品</th>
            <th>預約日期</th>
            <th>歸還日期</th>
            <th>天數</th>
            <th>租金</th>
            <th>押金</th>
            <th>總金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.tradeitemId}>
              <td>
                <img src={`http://localhost:8000/img/${detail.imageSrc}`} alt="" />
              </td>
              <td>{detail.productName}</td>
              <td>{new Date(detail.rentStart).toLocaleDateString()}</td>
              <td>{new Date(detail.rentEnd).toLocaleDateString()}</td>
              <td></td>
              <td>{detail.rent}</td>
              <td>{detail.deposit}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Orderdetail;