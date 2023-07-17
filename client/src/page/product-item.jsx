import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import productcategorymap from '../data/item2.json';
import axios from 'axios';

import ProductCarousel from '../components/product-item/ProductCarousel';
import ProductSellerCard from '../components/product-seller/productSellerCard';
import ButtonCard from '../components/product-item/buttonCard';

function ProductItem() {
  const [productitem, setProductItem] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [productSeller, setproductSeller] = useState('')
  const { id } = useParams();

    

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/productItem/${id}`
      );
      const data = await response.data;
      setProductItem(data);
    };
    fetchData();

    const fetchseller = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/productseller/${id}`
      );
      const data2 = await res.data;
      setproductSeller(data2)
    }
    fetchseller()

    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
  }, [id]);

  function getMain(subCategory) {
    let mainCategory = '';

    productcategorymap.forEach((main) => {
      if (main.subOptions.find((sub) => sub.value === subCategory)) {
        mainCategory = main.label;
      }
    });

    return mainCategory;
  }

  function getCategoryLabel(category) {
    let label = '';

    productcategorymap.forEach((main) => {
      if (main.value === category) {
        label = main.label;
      }

      main.subOptions.forEach((sub) => {
        if (sub.value === category) {
          label = sub.label;
        }
      });
    });

    return label;
  }

  //日期
  const [totalAmount, setTotalAmount] = useState(0);

  const { RangePicker } = DatePicker;

  const handleRangeChange = (dates) => {
    if (dates && dates.length === 2) {
      const startDate = dates[0];
      const endDate = dates[1];
      const days = endDate.diff(startDate, 'days'); // 使用 moment.js 的 diff 函式計算天數差距
      const rent = productitem[0].rent;
      const deposit = productitem[0].deposit;
      const total = rent * days + deposit;
      setTotalAmount(total);
    }
  };

  const [renderContent, setRenderContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderContent(true);
    }, 300);

    return () => clearTimeout(timer); // 清除計時器
  }, []);
  return renderContent ? (
    <>
      <>
        <div
          className={`container fade-in-container ${isLoaded ? 'fade-in' : ''}`}
        >
          <div className="breadcrumb">
            <div>
              <Link to="/">海爾戶外</Link> &gt;
              <Link to="/">
                {getMain(productitem[0].productCategoryChild)}
              </Link>{' '}
              &gt;
              <Link to="/">
                {getCategoryLabel(productitem[0].productCategoryChild)}
              </Link>
            </div>
            <div>
              <Link to="/product">
                <span className="back-link-icon"> &lt; </span> 返回一覽
              </Link>
            </div>
          </div>
          <div className="product-item">
            <div className="product-item-main">
              <div className="product-item-left">
                <ProductCarousel
                  key={productitem[0].productId}
                  productitem={productitem}
                />
              </div>
              <div className="product-item-right">
                <div className="item-text">
                  <p>{productitem[0].productName}</p>
                </div>
                <div className="item-text">
                  <div
                    className={
                      productitem[0].rentalStatus === '未出租'
                        ? 'rentalstate1'
                        : 'rentalstate2'
                    }
                  >
                    {productitem[0].rentalStatus}
                  </div>
                </div>
                <div className="item-text">
                  <span>租金 :</span>
                  <span>{productitem[0].rent}/日</span>
                </div>
                <div className="item-text">
                  <span>押金 :</span>
                  <span>{productitem[0].deposit}</span>
                </div>
                {/* <div className="item-text">
                  <span>運送方式 :</span>
                  <span>{productitem[0].shippingMethod}</span>
                </div> */}
                <Space className="item-text" direction="vertical" size={12}>
                  <span>選擇租借時段 :</span>
                  <RangePicker
                    placeholder={['出租日期', '歸還日期']}
                    onChange={handleRangeChange}
                  />
                </Space>

                <div className="item-text">
                  {totalAmount === 0 ? '' : `$${totalAmount}`}
                </div>

                <div className="item-text">
                  <Link to="/">
                    <i className="bi bi-cart3"></i> 加入租物車
                  </Link>
                </div>
                <div className="item-text">
                  <Link to="/">
                    <i className="bi bi-heart"></i> 加入收藏
                  </Link>
                </div>
              </div>
            </div>

            <ProductSellerCard
              key={productSeller[0].account}
              productSeller={productSeller[0]}
            />
            <div className="product-text">
              <p>產品描述</p>
              <div className="p-body">
                <table>
                  <tbody>
                    <tr>
                      <td>商品分類</td>
                      <td>
                        海爾戶外 &gt;{' '}
                        {getMain(productitem[0].productCategoryChild)} &gt;{' '}
                        {getCategoryLabel(productitem[0].productCategoryChild)}
                      </td>
                    </tr>
                    <tr>
                      <td>地點</td>
                      <td>{`${productitem[0].cityCounty} ${productitem[0].area}`}</td>
                    </tr>
                    <tr>
                      <td>配件(非必填)</td>
                      <td>
                        {productitem[0].accessory
                          ? productitem[0].accessory
                          : '沒有配件'}
                      </td>
                    </tr>
                    <tr>
                      <td>商品描述</td>
                      <td>{productitem[0].productDetail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div></div>
          </div>
          <ButtonCard
            key={productitem[0].productCategoryChild}
            productCategoryChild={productitem[0].productCategoryChild}
          />
        </div>
      </>
    </>
  ) : null;
}

export default ProductItem;
