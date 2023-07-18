import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import "./Personaldata.scss"
import { Col, Row } from 'antd';

const MemberCenter = () => {
  // setTradeItems(response.data);


  const [editMode1, setEditMode1] = useState(false);
  const [editMode2, setEditMode2] = useState(false);

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [loggedIn, setLoggedIn] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [identityCard, setIdentityCard] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');


  
//先取得資料庫的值
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/members/${account}`);
      console.log(response.data);
      console.log(response.data[0].account);
      setAccount(response.data[0].account)
      setPassword(response.data[0].password)
      setAddress(response.data[0].address)
      setName(response.data[0].name)
      setNickname(response.data[0].nickname)
      setBirthday(response.data[0].birthday)
    } catch (error) {
      console.error(error);
    }

    
  };
   fetchData();

  



  useEffect(()=>{

    const fetchMemberData = (account) => {
      axios.get(`http://localhost:8000/api/members/${account}`)
        .then((response) => {
          setAccount(response.data[0].account)
          setPassword(response.data[0].password)
          setAddress(response.data[0].address)
          setName(response.data[0].name)
          setNickname(response.data[0].nickname)
          setBirthday(response.data[0].birthday)
        })
        .catch((error) => {
          console.error('错误', error);
  
        });
    };
  },[editMode1])


  const handleEditClick1 = () => {
    if (loggedIn) {
      setEditMode1(true);
    } else {
      // 未登录，弹出登录提示窗
      // alert('未登入');
    }
  };

  const handleEditClick2 = () => {
    if (loggedIn) {
      setEditMode2(true);
    } else {
      // 未登录，弹出登录提示窗
      // alert('未登入');
    }
  };

  const handleAvatarChange = (e) => {
    const selectedFile = e.target.files[0];
    setAvatar(selectedFile);
    setAvatarPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setEditMode1(false);

    const memberData = {
      account: localStorage.getItem('userInfo'), // 获取LocalStorage中的帐号
      password,
      address,
      name,
      nickname,
      birthday,
      phoneNumber,
      identityCard,
      email,
      avatar
    };

    axios.post(`'/api/members/${account}'`, memberData)
      .then((response) => {
        console.log(response.data); // 处理保存成功的响应
      })
      .catch((error) => {
        console.error('错误', error);
      });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setEditMode2(false);
  };

  return (
    <div id='memberout'>
      <div className='member'>

        <div className='memberprc'>
          {avatarPreview && (
            <div className="avatar-preview">
              <img src={avatarPreview} alt="Avatar Preview" />
            </div>
          )}
          <label htmlFor="avatar-upload" className="avatar-upload-label">
            更改頭像
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </label>

        </div>
        <Row gutter={20}>

          <Col span={20}>
            <div className='membertitleline'>
              {editMode1 ? (
                <form className='memberform1' onSubmit={handleSubmit1}>
                  <fieldset>
                    <legend>帳號密碼</legend>
                    <div className='membertitleline'>
                      {/* Form 1 inputs */}
                      <label>
                        帳號：
                        <input
                          type="text"
                          value={account}
                          onChange={(e) => setAccount(e.target.value)}
                        />
                      </label>
                      <label>
                        密碼：
                        <input
                          type="text"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                      <label>
                        再次輸入密碼：
                        <input
                          type="date"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                        />
                      </label>

                      <button type="submit">儲存</button>
                    </div>
                  </fieldset>
                </form>
              ) : (
                <form className='memberform1'>
                  <fieldset>
                    <legend>帳號密碼</legend>
                    {/* Form 1 data */}
                    <div>帳號： {account}</div>
                    <div>密碼： {password}</div>
                    <div>再次輸入密碼： {birthday}</div>

                    <button onClick={()=>{setEditMode1(true)}}>編輯</button>
                  </fieldset>
                </form>
              )}
            </div>
          </Col>
          <Col span={20}>
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
                      <label>
                        生日：
                        <input
                          type="date"
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                        />
                      </label>
                      <label>
                        性別：
                        <input
                          type="text"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </label>
                      <label>
                        身分證：
                        <input
                          type="text"
                          value={identityCard}
                          onChange={(e) => setIdentityCard(e.target.value)}
                        />
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
                      <button type="submit">儲存</button>
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
                    <button onClick={handleEditClick2}>編輯</button>
                  </fieldset>
                </form>
              )}
            </div>
          </Col>

        </Row>

      </div>
    </div>
  );
}

export default MemberCenter;