import React, { useState,Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, Steps, Carousel, Col, Row } from 'antd';

const { Step } = Steps;






const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    try {
      await form.validateFields(); // 驗證表單數據
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.log('表單驗證失敗:', error);
    }
  };
  
  
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = (values) => {
    setLoading(true);
    // 在這裡處理最終提交的邏輯，例如發送API請求等
    console.log('Received values:', values);
    setLoading(false);

    setCurrentStep(currentStep + 1);
  };

  return (

    <div>
      <Carousel autoplay>
        <div>
          <img src="https://www.bing.com/th?id=OIP.rm4NLoLLMhdMQMFERZl9tAHaEK&w=157&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Carousel Image 1" />
        </div>
        <div>
          <img src="https://www.bing.com/th?id=OIP.aH3ALqqOWJaEt-V3Ux-d2QHaFj&w=147&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Carousel Image 2" />
        </div>
        <div>
          <img src="https://  www.bing.com/th?id=OIP.rm4NLoLLMhdMQMFERZl9tAHaEK&w=157&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Carousel Image 3" />
        </div>
      </Carousel>

      <Steps current={currentStep}>
        <Step title="帳號密碼" />
        <Step title="個人資訊" />
        <Step title="完成註冊" />
      </Steps>
      {currentStep === 0 && (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleNext}
        >
          <Form.Item
            label="帳號"
            name="username"
            rules={[
              { required: true, message: '請輸入帳號' },
              { pattern: /^[a-zA-Z0-9_-]{4,12}$/, message: '帳號必須由4到12個字母、數字、下劃線或破折號組成' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            rules={[
              { required: true, message: '請輸入密碼' },
              { min: 6, message: '密碼至少需要6個字符' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="再次輸入密碼"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '請再次輸入密碼' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('兩次輸入的密碼不一致'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              下一步
            </Button>
          </Form.Item>
        </Form>
      )};




      {currentStep === 1 && (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="姓名/暱稱"
            name="name"
            rules={[
              { required: true, message: '請輸入姓名/暱稱' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="身分證"
            name="idNumber"
            rules={[
              { required: true, message: '請輸入身分證號碼' },
              { pattern: /^[A-Z]{1}[1-2]{1}[0-9]{8}$/, message: '身分證格式不正確' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="生日"
            name="birthday"
            rules={[
              { required: true, message: '請輸入生日' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="手機"
            name="phone"
            rules={[
              { required: true, message: '請輸入手機號碼' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="電子信箱"
            name="email"
            rules={[
              { required: true, message: '請輸入電子信箱' },
              { type: 'email', message: '請輸入有效的電子信箱' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="default" onClick={handlePrev}>
              上一步
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              註冊
            </Button>
          </Form.Item>
        </Form>
      )}
      {
        currentStep === 2 && (
          <div>
            <h3>已經提交的表單資料：</h3>

            <p>註冊已完成！</p>
          </div>
        )
      }
    </div>
  )
}




export default RegistrationForm;
