import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Mycm() {
  const [products, setProducts] = useState([]);
  // 每筆productId只顯示一次
  const [uniqueProductIds, setUniqueProductIds] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/mypro/3x7Y90');
      const products = response.data;
      console.log(products);
      setProducts(products);

      // Extract unique productIds
      const uniqueIds = Array.from(new Set(products.map((product) => product.productId)));
      setUniqueProductIds(uniqueIds);
    } catch (error) {
      console.log(error);
    }
  };

    // 每筆productId只顯示一次
  const getProductDetails = (productId) => {
    const details = products.filter((product) => product.productId === productId);
    return details[0]; // Assuming there's only one product with the same productId
  };

  return (
    <div className="tbscss">
      <table className="order-table">
        <thead>
          <tr>
            <th>商品圖片</th>
            <th>商品</th>
            <th>租金</th>
            <th>押金</th>
            <th>總金額</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {/* 一次最多顯示三筆資料 */}
        {uniqueProductIds.slice(0, 3).map((productId) => {
        // {/* 每筆productId只顯示一次 */}
        // {uniqueProductIds.map((productId) => {
            const productDetails = getProductDetails(productId);
            if (!productDetails) return null;

            const { productName, rent, deposit, imageSrc } = productDetails;
            
            return(
            <tr key={productId}>
              <td>
                <img
                  id="proimg"
                  src={`http://localhost:8000/img/${imageSrc}`}
                  alt=""
                />
              </td>
              <td>{limitProductName(productName)}</td>
              <td>{rent}</td>
              <td>{deposit}</td>
              <td>{rent + deposit}</td>
              <td>編輯</td>
            </tr>
          );
            })}
            
        </tbody>
         
      </table>
     <button id="back">更多</button>
    </div>
    
  );
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

}



export default Mycm;