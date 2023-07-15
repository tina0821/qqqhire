import React from 'react';
import './productSort.scss';
function ProductSort({ onSort }) {
  return (
    <>
      <div className="rental-title">
        <span>排序</span>
        <ul className="sort-group">
          <li className="sort-item">
            <button onClick={() => onSort('rent')}>租金</button>
          </li>
          <li className="sort-item">
            <button onClick={() => onSort('latest')}>最新上架</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductSort;
