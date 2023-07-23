import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Personaldata.scss"
import { Avatar } from 'antd';
import Prconly from './Prconly'
import ChangePassword from './changePassword'

const MemberCenter = () => {
  // setTradeItems(response.data);


  const [editMode2, setEditMode2] = useState(false);

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [loggedIn, setLoggedIn] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [identityCard, setIdentityCard] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [profilePictureSrc, setProfilePictureSrc] = useState('');//個人照片顯示
  const [showAlert, setShowAlert] = useState(false);//照片
  const [showChange, setShowChange] = useState(false);//修改密碼

  const isLoggedIn = localStorage.getItem('userInfo').slice(1, -1);

  useEffect(() => {
    const fetchData = async () => {

      const response = await axios.get(`http://localhost:8000/api/members/${name, isLoggedIn}`);
      // console.log(name);
      console.log(response.data[0]);
      setAccount(response.data[0].account)
      setPassword(response.data[0].password)
      setName(response.data[0].name)
      setEmail(response.data[0].email)
      setIdentityCard(response.data[0].identityCard)
      setGender((response.data[0].gender === '1' ? '男' : '女'))
      setNickname(response.data[0].nickname)
      setPhoneNumber(response.data[0].phoneNumber)
      setBirthday(response.data[0].birthday.substring(0, 10))
      setProfilePictureSrc(response.data[0].profilePictureSrc)


    };
    if (isLoggedIn) {
      setLoggedIn(isLoggedIn);
      fetchData();
    }
  }, []);
  //先取得資料庫的值

  const updatedData = {
    name,
    nickname,
    birthday,
    gender,
    identityCard,
    phoneNumber,
    email,
    account
  };


  useEffect(() => {
    const fetchMemberData = () => {
      // console.log(updatedData)
      axios.put(`http://localhost:8000/api/members/account`, [updatedData])
        .then((response) => {
          setAccount(response.data[0].account)
          setPassword(response.data[0].password)
          setName(response.data[0].name)
          setNickname(response.data[0].email)
          setNickname(response.data[0].identityCard)
          setNickname(response.data[0].gender)
          setNickname(response.data[0].nickname)
          // setBirthday(response.data[0].birthday.substring(0, 10))
        })
        .catch((error) => {
          // console.error('错误??', error);


        });
    };
    fetchMemberData();
  }, [editMode2])

  const handleEditClick2 = () => {
    if (loggedIn) {
      setEditMode2(true);
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setEditMode2(false);
  };

  const changeimg = () => {
    setShowAlert(true)
  }
  const closePrconly = () => {
    setShowAlert(false)
  }
  const changePassword = () => {
    setShowChange(true)
  }
  const closechange = () => {
    setShowChange(false)
  }
  return (
    <div id='memberout'>
      <div style={{ fontSize: "2.5rem", marginLeft: "600px", color: "#0b7597", fontWeight: "bold", marginTop: "20px" }}>|會員中心|</div>
      <div style={{ fontSize: "2rem", marginLeft: "600px", color: "#0b7597", fontWeight: "bold", marginTop: "20px" }}>個人資料</div>
      <div className='member'>
        <div className='member1'>
          <div className='memberprc'>
            <Avatar src={`http://localhost:8000/img/${profilePictureSrc}`} alt="avatar" size={200} />
            <button onClick={() => changeimg()}>更改</button>
            <p>Welcome{name} {account}</p>
            {showAlert && <Prconly account={account} onClose={closePrconly} />}
            <button onClick={() => changePassword()}>修改密碼</button>
            {showChange && <ChangePassword account={account} onClose={closechange} />}

          </div>
          <div className='membertitleline'>
            {editMode2 ? (
              <form className='memberform1' onSubmit={handleSubmit2}>
                <fieldset>
                  <legend>基本資料</legend>
                  <div className='membertitleline'>
                    {/* Form 2 inputs */}
                    <label>
                      姓名：
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </label>
                    <label>
                      暱稱：
                      <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                      />
                    </label>
                    <div>
                      生日：{birthday}
                    </div>
                    <label>
                      性別：{gender}
                    </label>
                    <label>
                      身分證：{identityCard}
                    </label>
                    <label>
                      手機：
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </label>
                    <label>
                      電子信箱：
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </label>
                    <button type="submit" >儲存</button>
                  </div>
                </fieldset>
              </form>
            ) : (
              <form className='memberform1'>
                <fieldset>
                  <legend>基本資料</legend>
                  {/* Form 2 data */}
                  <div>姓名： {name}</div>
                  <div>暱稱： {nickname}</div>
                  <div>生日： {birthday}</div>
                  <div>性別： {gender}</div>
                  <div>身分證： {identityCard}</div>
                  <div>手機： {phoneNumber}</div>
                  <div>電子信箱： {email}</div>
                  <button onClick={handleEditClick2}>修改</button>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCenter;