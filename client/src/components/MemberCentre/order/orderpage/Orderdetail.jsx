import React from 'react';
import Cancelbtn from './btnact/cancelbtn';
import Appealbtn from './btnact/appealbtn';
import { Link } from "react-router-dom";

const Orderdetail = ({ tradeitemId, tradeitems, handleBack }) => {
  // 根据 tradeitemId 过滤出包含相同 tradeitemId 的详细信息
  const details = tradeitems.filter((tradeitem) => tradeitem.tradeitemId === tradeitemId);
  const uniqueProductAccounts = Array.from(
    new Set(details.map((detail) => detail.productAccount))
  );


  return (
    <div className="tbscss">
      {uniqueProductAccounts.map((productAccount) => {
        const products = details.filter(
          (detail) => detail.productAccount === productAccount
        );
        const { state } = products[0]; // 获取第一个产品的状态

        // 判斷資料的state，決定要顯示什麼button
        let buttonComponent = null;
      if (state === 0) {
        buttonComponent = <Cancelbtn tradeitemId={tradeitemId} />;
      } else if (state > 2) {
        buttonComponent = <Appealbtn />;
      }

        return (
          <div key={productAccount}>
            <div id='trititle'>
              <div id='tridet'>
                <p><Link to={`http://localhost:3000/productSeller/${productAccount}`}><img src='/images/icon/user-interface 4.png'></img></Link>賣家  {productAccount}</p>
                <p>訂單編號  {tradeitemId}</p>
              </div>
              {buttonComponent}
            </div>
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
                {products.map((item) => (
                  <tr key={item.productId}>
                    <td>
                      <img
                        id="proimg"
                        src={`http://localhost:8000/img/${item.imageSrc}`}
                        alt=""
                      />
                    </td>
                    <td>{limitProductName(item.productName)}</td>
                    <td>{new Date(item.rentStart).toLocaleDateString()}</td>
                    <td>{new Date(item.rentEnd).toLocaleDateString()}</td>
                    <td>{calculateDays(item.rentStart, item.rentEnd)}</td>
                    <td>{item.rent}</td>
                    <td>{item.deposit}</td>
                    <td>{TotalAmount(item.rent, item.deposit)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
      <button id="back" onClick={handleBack}>
        返回
      </button>
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
function TotalAmount(rent, deposit) {
  const totalAmount = parseFloat(rent) + parseFloat(deposit);
  return Math.floor(totalAmount); // 省略小數部分
}

export default Orderdetail;