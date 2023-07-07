import React, { Component } from 'react';
import "./footer.css"


function Footer() {
    return (
        <>
            {/* 頁尾footer */}
            <footer className="footer-1">
                <div className="footer-3">
                    <img className="footer-3-logo" src="http://localhost:8000/img/home/Logo%E9%BB%91.png" />
                    <p>Hire是一個致力於促進共享經濟和可持續發展的線上平台。我們相信，戶外冒險和自然探索是每個人都應該擁有的權利</p>
                    <p>All rights reserved.</p>
                </div>
                <div className="footer-4">
                    <p className="C1">Landings</p>
                    <a href className="C2">Home</a>
                    <a href className="C3">Porduct</a>
                    <a href className="C4">Services</a>
                    <p className="C5">Company</p>
                    <a href className="C6">IG</a>
                    <a href className="C7">FB</a>
                    <a href className="C8">YT</a>
                    <p className="C9">Resources</p>
                    <a href className="C10">Blog</a>
                    <a href className="C11">Careers</a>
                    <a href className="C12">Phone</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;