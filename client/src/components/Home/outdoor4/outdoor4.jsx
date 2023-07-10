import React, { Component } from 'react';
import "./outdoor4.css";

function Outdoor4() {
    return (
        <>
            {/* 主頁畫面4:關於我們 */}
            <div className="outdoor4">
                <img src="http://localhost:8000/img/home/%E9%97%9C%E6%96%BC%E6%88%91%E5%80%91-%E6%B5%B7.png" />
                {/* 左邊框 */}
                <div className="outdoor4-left" />
                {/* 中間文字框 */}
                <div className="outdoor4-wordBox">
                    <p>Wellcome to Hire</p>
                    <p>Exploring nature is a right that everyone should have, and the platform aims to provide convenient and affordable solutions to help you achieve this goal.</p>
                </div>
                {/* 右邊框 */}
                <div className="outdoor4-right" />
                {/* 按鈕 */}
                <a href className="btn-about">
                    <p className="btn-about-p">關於我們</p>
                </a>
            </div>
        </>
    );
};

export default Outdoor4;