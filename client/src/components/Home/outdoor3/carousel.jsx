import React from 'react';
import { Carousel } from 'antd';


const mySlides = {
  width: "80%",
  height: "25vh",
  paddingLeft: "10%"
};
const img = [
  {
    src: 'http://localhost:8000/img/home/returnImage/beach-g7b0bf9194_1280.jpg',
    alt: 'gg'
  },
  {
    src: 'http://localhost:8000/img/home/returnImage/beach-g7b0bf9194_1280.jpg',
    alt: 'gg'
  },
  {
    src: 'http://localhost:8000/img/home/returnImage/beach-g7b0bf9194_1280.jpg',
    alt: 'gg'
  },
  {
    src: 'http://localhost:8000/img/home/returnImage/beach-g7b0bf9194_1280.jpg',
    alt: 'gg'
  }
]

// style={mySlides}

const ChangeImg = () => (

  <Carousel autoplay>
    {img.map((e) => (
      <div key={e.alt}>
        <img style={mySlides} src={e.src} alt={e.alt} />
      </div>
    ))}
  </Carousel>
);

export default ChangeImg;