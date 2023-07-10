import React, { Component } from 'react';
import "./outdoor3.css";

function Outdoor3() {
    return (
        <>
            {/* 主頁畫面3 當季熱門活動 */}
            <div className="outdoor3">
                <div className="outdoor3box4">
                    <div className="outdoor3box1">
                        <p>當季熱門活動</p>
                    </div>
                    <div className="outdoor3box2">
                        
                        <div href className="hotActivity A1">
                            <img src="http://localhost:8000/img/home/hotActivity/climbing%E7%9B%B4%E7%9A%84.jpg" alt="" />
                            <div className="hotActivityWord">
                                <a href className="B1">MORE</a>
                            </div>
                        </div>
                        <div href className="hotActivity A2">
                            <img src="http://localhost:8000/img/home/hotActivity/bicycle.jpg" alt="" />
                            <div className="hotActivityWord">
                                <a href className="B1">MORE</a>
                            </div>
                        </div>
                        <div href className="hotActivity A3">
                            <img src="http://localhost:8000/img/home/hotActivity/surf2.jpg" alt="" />
                            <div className="hotActivityWord">
                                <a href className="B1">MORE</a>
                            </div>
                        </div>
                        <div href className="hotActivity A4">
                            <img src="http://localhost:8000/img/home/hotActivity/fishing3.jpg" />
                            <div className="hotActivityWord">
                                <a href className="B1">MORE</a>
                            </div>
                        </div>
                        <div href className="hotActivity A5">
                            <img src="http://localhost:8000/img/home/hotActivity/photography%E7%9B%B4%E5%BE%97.jpg" alt="" />
                            <div className="hotActivityWord">
                                <a href className="B1">MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="outdoor3box3">
                    <div className="outdoor3box3-a">
                        <p>熱門出租</p>
                        <a href className="btn-99">潛水服</a>
                        <a href className="btn-99">衝浪板</a>
                        <a href className="btn-99">滑雪板</a>
                    </div>
                    {/* Slideshow container */}
                    <div className="slideshow-container">
                        {/* Full-width images with number and caption text */}
                        <div className="mySlides fade">
                            {/* <img src="http://localhost:8000/img/home/returnImage/beach-g7b0bf9194_1280.jpg" /> */}
                        </div>
                        <div className="mySlides fade">
                            <img src="http://localhost:8000/img/home/returnImage/wallpaperflare.com_wallpaper%20(2).jpg" />
                        </div>
                        <div className="mySlides fade">
                            {/* <img src="http://localhost:8000/img/home/returnImage/diver-woman-resting.jpg" /> */}
                        </div>
                        <div className="mySlides fade">
                            {/* <img src="http://localhost:8000/img/home/returnImage/e5b081e99da2.webp" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Outdoor3;