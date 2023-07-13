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
                <img id='proimg' src={`http://localhost:8000/img/${detail.imageSrc}`} alt="" />
              </td>
              <td>{limitProductName(detail.productName)}</td>
              <td>{new Date(detail.rentStart).toLocaleDateString()}</td>
              <td>{new Date(detail.rentEnd).toLocaleDateString()}</td>
              <td>{calculateDays(detail.rentStart, detail.rentEnd)}</td>
              <td>{detail.rent}</td>
              <td>{detail.deposit}</td>
              <td>{calculateTotalAmount(detail.rent, detail.deposit)}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

// 輔助函數：計算租金和押金的總和
function calculateTotalAmount(rent, deposit) {
  const totalAmount = parseFloat(rent) + parseFloat(deposit);
  return Math.floor(totalAmount); // 省略小數部分
}

export default Orderdetail;