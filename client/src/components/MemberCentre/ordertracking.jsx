import React from 'react';
import miscImage from '../../assets/img/misc/wave.jpg';

function Ordertracking() {
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
      <div id="centre">
        訂單追蹤
      </div>
    </div>
  );
}

export default Ordertracking;


// order跟cmmgmt是不同page，所以把背景圖跟|會員中心|放在這裡(MemberCentre內)，到時候再分別import到order跟cmmgmt裡面
// 然後訂單追蹤放order page 商品管理放cmmgmt page
// 兩個頁面的元件再分別放在component各自的資料夾中，最終導入order page或cmmgmt page