import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MemberCenter = () => {
  const [editMode, setEditMode] = useState(false);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [loggedIn, setLoggedIn] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('userInfo');
    if (isLoggedIn) {
      setLoggedIn(isLoggedIn);
      fetchMemberData(isLoggedIn);
    } else {
      alert('還沒登入');
    }
  }, []);

  const fetchMemberData = (account) => {
    axios.get(`/api/members/${account}`)
      .then((response) => {
        const memberData = response.data;
        setAccount(memberData.account);
        setPassword(memberData.password);
        setAddress(memberData.address);
        setName(memberData.name);
        setNickname(memberData.nickname);
      })
      .catch((error) => {
        console.error('錯誤', error);
      });
  };

  const handleEditClick = () => {
    if (loggedIn) {
      setEditMode(true);
    } else {
      // 未登录，弹出登录提示窗
      // alert('未登入');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);

    const memberData = {
      account,
      password,
      address,
      name,
      nickname
    };

    axios.post('/api/members', memberData)
      .then((response) => {
        console.log(response.data); // 處理保存成功的回應
      })
      .catch((error) => {
        console.error('錯誤', error);
      });
  };

  return (
    <div id='memberout'>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            帳號:
            <input
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          </label>
          <br />
          <label>
            密碼:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            地址:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <label>
            姓名:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            暱稱:
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <button type="submit">儲存</button>
        </form>
      ) : (
        <div>
          <p>帳號: {account}</p>
          <p>密碼: {password}</p>
          <p>地址: {address}</p>
          <p>姓名: {name}</p>
          <p>暱稱: {nickname}</p>
          <button onClick={handleEditClick}>編輯</button>
        </div>
      )}
    </div>
  );
};

export default MemberCenter;
