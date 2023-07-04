import React from 'react';
import ProductTop from '../components/product/productTop';
import ProductLeft from '../components/product/productLeft';
import ProductCard from '../components/product/productCard';
import ProductSort from '../components/product/productSort';
import './product.scss';


function Product() {
  return (
    <>
      <ProductTop />
      <div className="container">
        <div className="product">
          <ProductLeft />
          <div className="rental">
            <ProductSort />
            <div className="rental-body">
              <div className="row rental-goods" id="list-wrapper">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
