import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Googlehayaku = () => {
  const history = useNavigate();

  const [googleuser, setgoogleuser] = useState([])


  const googlefetch = async () => {
    const googleuserdata = {
      account: googleuser.email.split("@")[0],
      name: googleuser.family_name,
      nickname: googleuser.family_name,
      email: googleuser.email
    }
    await axios.post('http://localhost:8000/api/google-account', { googleuserdata })
  }

  if (Object.keys(googleuser).length > 0) {
    const userEmail = googleuser.email.split("@")[0];
    googlefetch()
    // 登入成功，可以顯示使用者的資訊或執行其他操作
    localStorage.setItem('userInfo', JSON.stringify(userEmail));
    alert("登入成功")
    history("/")
    window.location.reload();
    console.log('使用者已登入:', googleuser);
  } else {
    // 未登入，可以顯示登入按鈕或執行其他操作
    console.log('使用者未登入');
  }

  useEffect(() => {

    window.onGoogleSuccess = async (response) => {
      const { credential } = response;
      const res = await axios.post('http://localhost:8000/api/google-login', { credential })
      const googleuser = res.data
      setgoogleuser(googleuser)
    }

    // Inject the google provided script 
    // (an importable module would be nicer here)
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // clean up for react lifecycle
      window.onGoogleSuccess = undefined;
      document.body.removeChild(script)
    }
  }, [googleuser]);








  return (

    <>
      <div id="g_id_onload"
        data-client_id={"570382147021-8fsv658iibb1p1va1malkt5ppq7ll8v3.apps.googleusercontent.com"}
        data-callback="onGoogleSuccess" // as defined above
        data-context="signin"
        data-ux_mode="popup"
        data-auto_prompt="false"
        data-login_uri="http://localhost:3000/login">
      </div>

      <div className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_blue"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
      </div>
    </>


  );
};

export default Googlehayaku;
