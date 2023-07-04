import React from 'react';
import miscImage from '../assets/img/misc/統神-張嘉航.gif';


const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="display-4 text-danger">404 - Page Not Found</h1>
            <p className="lead">很抱歉! 路徑出現錯誤....</p>
            <a href="/" className="btn btn-primary">回到首頁</a>
            <br /><br /><br />
            <img src={miscImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
