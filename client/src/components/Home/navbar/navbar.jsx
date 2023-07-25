import React, { useRef, useEffect, useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import NavbarOut from '../navbarOut_IN/navbarOut';
import NavbarIN from '../navbarOut_IN/navbarIN';


function Navbar() {
    const headerBGC = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > 0) {
                headerBGC.current.classList.add('changeBGColor')
            } else {
                headerBGC.current.classList.remove('changeBGColor')
            }

        })
    })

    const [username, setusername] = useState('');

    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');

        setusername(storedUserInfo);
    }, []);



    return (
        <>
            {/* 標題列 */}
            <header className="header" ref={headerBGC}>
                {/* LOGO */}
                <div className="header-logo">
                    {/* LOGO超連結 */}
                    <Link className="headerLogoImg" to="/">
                        {/* 白 */}
                        <img src="http://localhost:8000/img/home/Logo%E7%99%BD.png" alt='黑' />
                        {/* 黑 */}
                        <img src="http://localhost:8000/img/home/Logo%E9%BB%91.png" alt='白' />
                    </Link>
                </div>
                {/* 右邊按鈕/icon */}
                <div className="header-button-icon">
                    {/* 按鈕 */}
                    <ul className="header-button">
                        <li><Link button className="btn-98" to="/product">租借列表</Link></li>
                        {localStorage.getItem("userInfo")?<li><Link button className="btn-98" to="/up">快速上架</Link></li>:<li><Link button className="btn-98" to="/login">快速上架</Link></li>}
                        <li><Link button className="btn-98" to="/">關於我們</Link></li>
                    </ul>
                    {/* icon */}
                    {/* icon */}
                    {username ? <NavbarIN /> : <NavbarOut />}
                    {/* <NavbarOut/> */}
                    {/* <NavbarIN/> */}
                </div>
            </header>

        </>
    )
}

export default Navbar;