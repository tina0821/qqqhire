import React, { useState } from 'react';
import './Prconly.scss';
import axios from 'axios';

const ChangePassword = ({ onClose,account }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleConfirmClick = () => {
    // 先判斷舊密碼與資料庫是否符合
    // 假設您的 API 端點是 http://localhost:8000/api/change-password
    axios
      .post('http://localhost:8000/api/change-password', {
        oldPassword,
        newPassword,
        confirmNewPassword,
        account
      })
      .then((response) => {
        // 回傳的 response 中可能包含成功訊息或其他處理結果
        console.log(response.data);
        // 更新成功後可進行其他處理，例如顯示成功訊息、關閉彈出視窗等
        onClose();
      })
      .catch((error) => {
        // 處理錯誤，例如顯示錯誤訊息
        console.error('錯誤：', error);
      });
  };

  return (
    <div id=''>
      <div>修改密碼</div>
      <label htmlFor='oldPassword'>舊密碼</label>
      <input
        type='password'
        id='oldPassword'
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <label htmlFor='newPassword'>新密碼</label>
      <input
        type='password'
        id='newPassword'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label htmlFor='confirmNewPassword'>再次輸入新密碼</label>
      <input
        type='password'
        id='confirmNewPassword'
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />
      <button onClick={handleConfirmClick}>確認</button>
      <button onClick={onClose}>取消</button>
    </div>
  );
};

export default ChangePassword;
