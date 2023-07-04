import React, { Component } from 'react';
import "./navbar.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCoffee} />

function Navbar() {
    return (
        <>
            <header className="header">
                {/* LOGO */}
                <div className="header-logo">
                    {/* LOGO超連結? */}
                    <a href>
                        {/* LOGO 用圖片還是文字? */}
                        <img className="logoImg" src="/images/home/01.png" />
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
                        <li><a href className="iconMove"><i className="fa-regular fa-heart" /></a></li>
                        <li><a href className="iconMove"><i className="fa-solid fa-cart-shopping" /></a></li>
                        <li>
                            <a href className="iconMove"><i className={"faCoffee.fa-regular faCoffee.fa-circle-user"} /></a>
                            <ul className="drop-menu limenu-2">
                                <li><a href>會員登入</a></li>
                                <li><a href>會員註冊</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navbar;