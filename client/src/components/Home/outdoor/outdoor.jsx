import React, { Component } from 'react';
import "./outdoor.css"


function Outdoor() {
    return (
        <>
            {/* 主頁畫面 */}
            <div className="outdoor">
                <img src="http://localhost:8000/img/home/homepage/surf1.jpg"/>
                <div className="outdoor-word">
                    <p>Hire outdoor</p>
                    <p>海爾戶外</p>
                </div>
                <a href className="outdoor-btn">
                    <img src="http://localhost:8000/img/home/hirecircle.png" className="hireClass" id="hireId" />
                    <div className="btn-div2class" id="btn-div2">
                        <p className="btn-pClass" id="btn-p">↓</p>
                    </div>
                </a>
            </div>
        </>
    );
}

export default Outdoor;