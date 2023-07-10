import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./login.scss"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = () => {
        // 在这里处理登录逻辑
        console.log('用户名:', username);
        console.log('密码:', password);
        // 发起登录请求或执行其他操作
    };

    return (

        <div id='loginout' >
            <Row id='login'>
                <Col span={12}>
                    {/* 省略 Carousel 的代码 */}
                </Col>
                <Col span={12}>
                    <h1>登入</h1>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish} // 添加 onFinish 事件处理程序

                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名！',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="用户名"
                                size='large'
                                value={username}
                                onChange={e => setUsername(e.target.value)} // 更新用户名的状态
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
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
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <span className="login-form-forgot">忘记密码？</span>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            或 <a href="">注册</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
