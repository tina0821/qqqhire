// ForgetPassword.js

import axios from 'axios';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/forgot-password', {
        email: email
      });
      console.log(response)
      if (response.ok) {
        alert('請檢查您的電子郵件以繼續密碼重置流程。');
      }
    } catch (error) {
      console.error('出現錯誤：', error);
      alert('出現錯誤，請稍後再試111。');
    }
  };

  return (
    <div>
      <h2>忘記密碼</h2>
      <form onSubmit={handleSubmit}>
        <label>
          電子郵件：
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
