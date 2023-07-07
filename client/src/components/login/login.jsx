import React, { useState, useEffect } from 'react';
import { Carousel, Button, Checkbox, Form, Input, Col, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./login.scss"

const Login = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div id='loginout' >
            <Row id='login'>
                <Col span={12}>
                    <Carousel afterChange={onChange}>
                        <div>
                            <img
                                // style={contentStyle}
                                src="http://localhost:8000/img/q123/2mm潛水手套-2.jpg"
                                alt="Carousel Image 1"
                            />
                        </div>
                        <div>
                            <img
                                // style={contentStyle}
                                src="http://localhost:8000/img/q123/2mm潛水手套-2.jpg"
                                alt="Carousel Image 1"
                            />
                        </div>
                        <div>
                            <img
                                // style={contentStyle}
                                src="http://localhost:8000/img/q123/2mm潛水手套-2.jpg"
                                alt="Carousel Image 1"
                            />
                        </div>
                    </Carousel>
                </Col>
                <Col span={12}>

                    <h1>登入</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}

                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Username"
                            size='large' />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                size='large'
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};
export default Login;