import React, { useState, useEffect } from 'react';

function ProductSort() {
  return (
    <>
      <div className="rental-title">
        <span>排序</span>
        <ul className="sort-group">
          <li className="sort-item">
            <a href="#">熱門度</a>
          </li>
          <li className="sort-item">
            <a href="#">租金</a>
          </li>
          <li className="sort-item">
            <a href="#">最新上架</a>
          </li>
          <li className="sort-item">
            <a href="#">賣場評價</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductSort;
