import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './productSeller.scss'
import ProductSellerCard from '../components/product-seller/productSellerCard';
import ProductCard from '../components/product/productCard';

function ProductSeller() {
  const { account } = useParams();
  const [ProductSeller, setProductSeller] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8000/api/Pseller/${account}`)
      const data = res.data;
      setProductSeller(data)
    }
    fetchData()
  }, [account])


  return (<>
    <div className='container' id='P-seller-page' >
      {ProductSeller.length > 0 ? (
        <>
          <div className="breadcrumb">
            <div>
              <Link to="/">海爾戶外</Link> &gt;
              <Link to="/">
                {ProductSeller[0].account}
              </Link>{' '}
              &gt;
              <Link to="/">
                全部商品
              </Link>
            </div>
            <div>
              <Link to="/product">
                <span className="back-link-icon"> &lt; </span> 返回商品一覽
              </Link>
            </div>
          </div>
          {/* <ProductTop /> */}
            <div className='psg-title'>【 賣家資訊 】</div>
          <ProductSellerCard key={ProductSeller[0].account} productSeller={ProductSeller[0]} />
          <div className='row'>
            {ProductSeller.map((product) => (
              <Link key={product.productId} target="_blank" className="col-md-4 pd-link" to={`/productItem/${product.productId}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </div>
  </>
  );
}

export default ProductSeller;