import React, { useState, useEffect } from 'react';

function ProductLeft() {
  return (
    <>
      <aside>
        <div className="filterMenu">
          <div className="filter-title">篩選</div>
          <div className="filter-body">
            <div className="filter-group">
              <p>金額篩選</p>
              <div className="filter-option">
                <div>
                  <input
                    className="money"
                    type="text"
                    placeholder="  $  最低金額"
                  />
                </div>
              </div>
              <div className="filter-option">
                <div>
                  <input
                    className="money"
                    type="text"
                    placeholder="  $  最高金額"
                  />
                </div>
              </div>
            </div>
            <div className="filter-group">
              <p>出租狀態</p>
              <div className="filter-option">
                <input type="checkbox" id="rental-checkbox" />
                <label htmlFor="rental-checkbox">租借中</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="nottuzu" />
                <label htmlFor="nottuzu">未出租</label>
              </div>
            </div>
            <div className="filter-group">
              <p>運送方式</p>
              <div className="filter-option">
                <input type="checkbox" id="7-11" />
                <label htmlFor="7-11">7-11</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="raifu" />
                <label htmlFor="raifu">萊爾富</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="okmarket" />
                <label htmlFor="okmarket">OK超商</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="delivery" />
                <label htmlFor="delivery">宅配/快遞</label>
              </div>
            </div>
          </div>
          <div className="filter-footer">
            <button>清空所有條件</button>
            <button>開始篩選</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default ProductLeft;
