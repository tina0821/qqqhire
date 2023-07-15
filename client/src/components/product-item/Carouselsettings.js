const imgsrc = [
  "http://localhost:8000/img/camping/2 人防風防水雙門登山帳篷 (2.8kg)1 (1).jpg",
  "http://localhost:8000/img/camping/2 人防風防水雙門登山帳篷 (2.8kg)1 (2).jpg",
  "http://localhost:8000/img/camping/2 人防風防水雙門登山帳篷 (2.8kg)1 (3).jpg",
  "http://localhost:8000/img/camping/2 人防風防水雙門登山帳篷 (2.8kg)1 (4).jpg"
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  customPaging: (i) => {
    (
      <a>
        <div>
          <img
            src={imgsrc[i]}
            alt=""
          />
        </div>
      </a>
    )
  },

  // appendDots: (dots) => (
  //   <div
  //     style={{
  //       backgroundColor: '#ddd',
  //       borderRadius: '10px',
  //       padding: '10px',
  //     }}
  //   >
  //     <ul style={{ margin: '0px' }}> {dots} </ul>
  //   </div>
  // ),
  // customPaging: (i) => {
  //   console.log(i);
  // }
};

export default settings;