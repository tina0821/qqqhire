import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token');

    if (!token) {
      setError('無效的重置密碼連結。');
      return;
    }

    if (password !== confirmPassword) {
      setError('密碼與確認密碼不匹配。');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/reset-password', {
        token,
        password,
      });

      if (response.status === 200) {
        setSuccess('密碼重置成功。');
      } else {
        setError('密碼重置失敗，請稍後再試。');
      }
    } catch (error) {
      setError('密碼重置失敗，請稍後再試1。');
    }
  };

  return (
    <div>
      <h2>重置密碼</h2>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
      <form onSubmit={handleResetPassword}>
        <label>
          新密碼：
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          確認密碼：
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">重置密碼</button>
      </form>
    </div>
  );
};

export default ResetPassword;
