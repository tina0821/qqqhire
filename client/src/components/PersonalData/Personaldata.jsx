import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import "./Personaldata.scss"
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const MemberCenter = () => {
  // setTradeItems(response.data);


  const [editMode1, setEditMode1] = useState(false);
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
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const history = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userInfo');
    if (isLoggedIn) {
      setLoggedIn(isLoggedIn);
      fetchData();
    }
  }, []);
  //先取得資料庫的值
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/members/member111');
      // console.log(response.data);
      console.log(response.data[0].email);
      setAccount(response.data[0].account)
      setPassword(response.data[0].password)
      setName(response.data[0].name)
      setEmail(response.data[0].email)
      setIdentityCard(response.data[0].identityCard)
      setGender((response.data[0].gender === '1' ? '男' : '女'))
      setNickname(response.data[0].nickname)
      setPhoneNumber(response.data[0].phoneNumber)
      setBirthday(response.data[0].birthday.substring(0, 10))

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    const fetchMemberData = (account) => {
      axios.get('http://localhost:8000/api/members/member111')
        .then((response) => {
          setAccount(response.data[0].account)
          setPassword(response.data[0].password)
          setName(response.data[0].name)
          setNickname(response.data[0].email)
          setNickname(response.data[0].identityCard)
          setNickname(response.data[0].gender)
          setNickname(response.data[0].nickname)
          setBirthday(response.data[0].birthday.substring(0, 10))
        })
        .catch((error) => {
          console.error('错误??', error);


        });
    };
    fetchMemberData();
  }, [editMode1])

  const handleEditClick2 = () => {
    if (loggedIn) {
      setEditMode2(true);
    }
  };
  // Prc
  const handleAvatarChange = (e) => {
    const selectedFile = e.target.files[0];
    setAvatar(selectedFile);
    setAvatarPreview(URL.createObjectURL(selectedFile));
  };

  const ok1 = () => {
    alert("資料已修改")
    setIsModalOpen(false);

  }
  const handleSubmit1 = (e) => {
    e.preventDefault();
    setEditMode1(false);



    const memberData = {
      account: localStorage.getItem('userInfo'), // 获取LocalStorage中的帐号
      password,
      name,
      nickname,
      birthday,
      phoneNumber,
      identityCard,
      email,

    };

    axios.post('http://localhost:8000/api/members/member111', memberData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('错误qq', error);
      });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    setEditMode2(false);
  };


  const handleConfirm = () => {
    setIsModalOpen(true);
  };
  return (
    <div id='memberout'>
      <div className='member'>
        <div style={{ fontSize: "2rem", marginLeft: "600px", color: "#0b7597", fontWeight: "bold", marginTop: "20px" }}>|個人資料|</div>
        <div className='member1'>

          <div className='memberprc'>
            {avatarPreview && (
              <div className="avatar-preview">
                <img src={avatarPreview} alt="Avatar Preview" />
              </div>
            )}
            {/* <label htmlFor="avatar-upload" className="avatar-upload-label"
              style={{ backgroundColor: "white", marginLeft: "40px", borderRadius: "5px" }}>
              更改頭像
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </label> */}

          </div>
          <Row gutter={20}>

            <Col span={20}>
              <div className='membertitleline'>
                {editMode1 ? (
                  <form className='memberform1' onSubmit={handleSubmit1}>
                    <fieldset>
                      <legend>帳號密碼</legend>
                      <div className='membertitleline'>
                        <label>
                          帳號：{account}
                        </label>
                        <label>
                          密碼：
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </label>
                        <label>
                          再次輸入密碼：
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setBirthday(e.target.value)}
                          />
                        </label>

                        <button type="submit" >儲存</button>
                        <Modal
                          isOpen={isModalOpen}
                          onRequestClose={() => setIsModalOpen(false)}
                          contentLabel="修改資料提示"
                        >
                          <h3>資料已修改</h3>
                          <button onClick={handleConfirm}>確認</button>
                        </Modal>
                      </div>
                    </fieldset>
                  </form>
                ) : (
                  <form className='memberform1'>
                    <fieldset>
                      <legend>帳號密碼</legend>
                      {/* Form 1 data */}
                      <div>帳號： {account}</div>
                      <div>密碼： ******</div>
                      <div>再次輸入密碼：******</div>

                      <button onClick={() => { setEditMode1(true) }}>修改</button>
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
                        <button type="submit" onClick={ok1}>儲存</button>
                        <Modal
                          isOpen={isModalOpen}
                          onRequestClose={() => setIsModalOpen(false)}
                          contentLabel="修改資料提示"
                        >
                          <h3>資料已修改</h3>
                          <button onClick={handleConfirm}>確認</button>
                        </Modal>
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
            </Col>

          </Row>

        </div>
      </div>
    </div>
  );
}

export default MemberCenter;