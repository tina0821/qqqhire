import React from 'react';
import miscImage from '../../assets/img/misc/wave.jpg';

function Centre() {
  const divStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
  };
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${miscImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.5,
  };
  return (
    <div style={divStyle}>
      <div style={overlayStyle}></div>
      <div>
        會員中心
      </div>
      
    </div>
  );
}

export default Centre;