import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Upload, Image } from 'antd';

const { Option } = Select;

const Up = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    // 在这里可以将表单数据提交到服务器或执行其他操作
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleUpload = (file) => {
    console.log(file);
    // 在这里可以处理上传的文件
    setFileList([file]);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <Form
      name="productForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      
    >
      <Form.Item
        label="商品名稱"
        name="productName"
        rules={[{ required: true, message: '輸入商品名稱' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="租金(/天)"
        name="rentPerDay"
        rules={[{ required: true, message: '輸入租金' }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item
        label="押金"
        name="deposit"
        rules={[{ required: true, message: '輸入押金' }]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item label="照片" name="fileList" valuePropName="fileList">
        <Upload beforeUpload={handleUpload} listType="picture-card" fileList={fileList}>
          {previewImage ? (
            <Image src={previewImage} alt="Preview" style={{ width: '100px', height: '100px' }} />
          ) : (
            '上傳照片'
          )}
        </Upload>
      </Form.Item>

      <Form.Item
        label="商品分類"
        name="category"
        rules={[{ required: true, message: '請选择商品分類' }]}
      >
        <Select>
          <Option value="category1">分类1</Option>
          <Option value="category2">分类2</Option>
          <Option value="category3">分类3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="配件"
        name="accessories"
        rules={[{ required: true, message: '請輸入配件' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="地區"
        name="region"
        rules={[{ required: true, message: '請选择地區' }]}
      >
        <Select>
          <Option value="region1">地區1</Option>
          <Option value="region2">地區2</Option>
          <Option value="region3">地區3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="商品描述"
        name="description"
        rules={[{ required: true, message: '請輸入商品描述' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        wrapperCol={{ offset: 6, span: 14 }}
      >
        <Checkbox>
          我同意注意事項
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Up;
