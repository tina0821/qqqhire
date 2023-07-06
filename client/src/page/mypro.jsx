import React from 'react';
import miscImage from '../assets/img/misc/wave.jpg';
import Myorder from '../components/MemberCentre/order/myorder';

function Order() {
  const divStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${miscImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '90px',
    color: '#0B7597',
  };

  return (
    <div style={divStyle}>
      <div style={contentStyle}>
        <div>
          會員中心
        </div>
        <div>
          商品管理
        </div>
      </div>
      <Myorder />
    </div>
  );
}

export default Order;