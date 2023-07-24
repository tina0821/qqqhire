import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Col, Row, Carousel } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "./login.scss"

const Login = () => {
    const [account, setaccount] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const [googleuser, setgoogleuser] = useState([])
    if (Object.keys(googleuser).length > 0) {
        const userEmail = googleuser.email;
        // 登入成功，可以顯示使用者的資訊或執行其他操作
        localStorage.setItem('userInfo', userEmail);
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
    }, []);


    const onFinish = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                account: account,
                password: password
            });

            if (response.status === 200) {
                console.log('ok');
                const userInfo = `${account}`;
                localStorage.setItem('userInfo', JSON.stringify(userInfo));
                alert("登入成功")
                history("/")
                window.location.reload();


            } else if (response.status === 401) {
                console.log('帳號或密碼錯');
            }

        } catch (error) {
            console.error('请求失败:', error);
        }
    };





    return (

        <div id='loginout' >
            <Row id='login'>
                <Col span={12}>
                    <Carousel autoplay className='Carousel' style={{ height: "100%" }}>
                        <div>
                            <img
                                // style={contentStyle}
                                src="http://localhost:8000/img/login/1.png"
                                alt="Carousel 1"
                            />
                        </div>
                        <div>
                            <img
                                // style={contentStyle}
                                src="http://localhost:8000/img/login/2.png"
                                alt="Carousel 2"
                            />
                        </div>
                        <div>
                            <img
                                // style={contentStyle}
                                src="http://localhost:8000/img/login/3.png"
                                alt="Carousel 3"
                            />
                        </div>
                    </Carousel>
                </Col>
                <Col span={12} id='login-right'>
                    <h1>登入</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}

                    >
                        <Form.Item
                            label="帳號"
                            name="account"
                            rules={[
                                {
                                    required: true,
                                    message: '請輸入帳號！',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="帳號"
                                size='large'
                                value={account}
                                onChange={e => setaccount(e.target.value)} // 更新用户名的状态
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="密碼"
                            rules={[
                                {
                                    required: true,
                                    message: '請輸入密碼！',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                size='large'
                                value={password}
                                onChange={e => setPassword(e.target.value)} // 更新密码的状态
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>記住我</Checkbox>
                            </Form.Item>
                            <span className="login-form-forgot">忘記密碼</span>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"

                            >
                                登入
                            </Button>
                            或 <a href="/RegistrationForm">註冊</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
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
        </div>
    );
};

export default Login;
