import React, { Component, useEffect, useRef } from 'react';
import style from "./navbarOut_IN.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


function NavbarOut() {
    return (
        <>
            {/* icon */}

            <ul className={style["header-icon"]}>
                <li><a href="" className={style.iconMove}><FontAwesomeIcon icon={faHeart} className="icon" /></a></li>
                <li><a href="" className={style.iconMove}><FontAwesomeIcon icon={faCartShopping} className="icon" /></a></li>
                <li>
                    <a href className={style.iconMove}><FontAwesomeIcon icon={faCircleUser} className="icon" /></a>
                    <ul className={`${style["drop-menu"]} ${style["limenu-2"]}`}>
                        <li><a href="">會員登入</a></li>
                        <li><a href="">會員註冊</a></li>
                    </ul>
                </li>
            </ul>
        </>

    )
}

export default NavbarOut;