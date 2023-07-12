import React from 'react';
import { Carousel } from 'antd';

const mySlides = {
    width: "80%",
    height: "25vh",
    paddingLeft: "10%"
};

// style={mySlides}

const ChangeImg = () => (
  <Carousel autoplay>
    <div>
      <img style={mySlides} src="http://localhost:8000/img/home/returnImage/beach-g7b0bf9194_1280.jpg" />
    </div>
    <div>
      <img style={mySlides} src="http://localhost:8000/img/home/returnImage/wallpaperflare.com_wallpaper%20(2).jpg" />
    </div>
    <div>
      <img style={mySlides} src="http://localhost:8000/img/home/returnImage/diver-woman-resting.jpg" />
    </div>
    <div>
      <img style={mySlides} src="http://localhost:8000/img/home/returnImage/e5b081e99da2.webp" />
    </div>
  </Carousel>
);

export default ChangeImg;