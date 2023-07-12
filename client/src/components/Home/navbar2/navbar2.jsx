import React, { Component, useEffect, useRef } from 'react';
import style from "./navbar2.module.css"

import NavbarOut from '../navbarOut_IN/navbarOut';
import NavbarIN from '../navbarOut_IN/navbarIN';


// 引入 Font Awesome的icon ?
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function Navbar2() {

    return (
        <>
            <header className={style.header}>
                {/* LOGO */}
                <div className={style["header-logo"]}>
                    {/* LOGO超連結? */}
                    <a href>
                        {/* LOGO 用圖片還是文字? */}
                        <img className={style.logoImg} src="/images/home/01.png" />
                    </a>
                </div>
                {/* 右邊按鈕/icon */}
                <div className={style["header-button-icon"]}>
                    {/* 按鈕 */}
                    <ul className={style["header-button"]}>
                        <li><a button className={style["btn-98"]} href>租借列表</a></li>
                        <li><a button className={style["btn-98"]} href>快速上架</a></li>
                        <li><a button className={style["btn-98"]} href>關於我們</a></li>
                    </ul>
                    {/* icon */}
                    {/* <NavbarOut/> */}
                    <NavbarIN/>
                    {/* <ul className={style["header-icon"]}> */}
                        {/* <li><a href="" className={style.iconMove}><FontAwesomeIcon icon={faHeart} className="icon" /></a></li>
                        <li><a href="" className={style.iconMove}><FontAwesomeIcon icon={faCartShopping} className="icon" /></a></li>
                        <li>
                            <a href className={style.iconMove}><FontAwesomeIcon icon={faCircleUser} className="icon" /></a>
                            <ul className={`${style["drop-menu"]} ${style["limenu-2"]}`}>
                                <li><a href="">會員登入</a></li>
                                <li><a href="">會員註冊</a></li>
                            </ul>
                        </li> */}
                    {/* </ul> */}
                </div>
            </header>

        </>
    );
}

export default Navbar2;