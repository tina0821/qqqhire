import React, { Component } from 'react';
import "./outdoor2.css"

function Outdoor2() {
    return (
        <>
            {/* 主頁畫面2 出租/租借 */}
            <div className="outdoor2 blur ">
                <div className="outdoor2box1" />
                <div className="split left">
                    <h1>出租商品</h1>
                    <a href className="btn">explore</a>
                    {/* <p>與他人分享你的愛好,同時賺取額外收入</p> */}
                </div>
                <div className="split right">
                    <h1>租借商品</h1>
                    <a href className="btn">explore</a>
                    {/* <p>與他人分享你的愛好,同時賺取額外收入</p> */}
                </div>
            </div>
        </>
    )
};

export default Outdoor2;