import React, { useState, useEffect } from 'react';
function ProductCard() {
  return (
    <>
      <div className="col-md-4 rental-goods-group list-item">
        <div className="card">
          <div className="card-img">
            <img
              src="https://gcs.rimg.com.tw/g4/8f4/345/foxuyirte/1/52/b3/22323890303667_734_m.jpg"
              className="card-img-top"
              alt="Product 1"
            />
          </div>
          <div className="card-body">
            <h4 className="card-title">SUP槳板</h4>
            <div className="card-text2">
              <span>台中市</span>
              <span>南屯區</span>
              <span />
              <span>可出租</span>
            </div>
            <p className="card-text">$400/日</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
