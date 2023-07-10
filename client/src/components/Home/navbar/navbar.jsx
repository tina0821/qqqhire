import React, { Component } from 'react';
import "./navbar.css";

// 引入 Font Awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 引入個別 icon
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    return (
        <>
            {/* 標題列 */}
            <header className="header">
                {/* LOGO */}
                <div className="header-logo">
                    {/* LOGO超連結? */}
                    <a href>
                        {/* LOGO 用圖片還是文字? */}
                        <img className="logoImg" src="http://localhost:8000/img/home/Logo%E7%99%BD.png" />                    
                    </a>
                </div>
                {/* 右邊按鈕/icon */}
                <div className="header-button-icon">
                    {/* 按鈕 */}
                    <ul className="header-button">
                        <li><a button className="btn-98" href>租借列表</a></li>
                        <li><a button className="btn-98" href>快速上架</a></li>
                        <li><a button className="btn-98" href>關於我們</a></li>
                    </ul>
                    {/* icon */}
                    <ul className="header-icon">
                        <li><a href className="iconMove"><FontAwesomeIcon icon={faHeart} className="icon"/></a></li>
                        <li><a href className="iconMove"><FontAwesomeIcon icon={faCartShopping} className="icon"/></a></li>
                        <li>
                            <a href className="iconMove"><FontAwesomeIcon icon={faCircleUser} className="icon" /></a>
                            <ul className="drop-menu limenu-2">
                                <li><a href>會員登入</a></li>
                                <li><a href>會員註冊</a></li>
                            </ul>
                        </li>                        
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar;