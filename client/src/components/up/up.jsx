import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Upload, Image, Cascader } from 'antd';
import dataitem from "../../data/item2.json"
import area from "../../data/CityCountyData.json"

import "./up.scss"


const Up = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    console.log(values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleUpload = (file) => {
    console.log(file);
    setFileList([file]);
    setPreviewImage(URL.createObjectURL(file));
  };

  const onChange = (value) => {
    console.log(value);
  };

  return (

    <Form
      name="productForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      id='fastout'

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
        rules={[{ required: true, message: '請選擇商品分類' }]}
      >
        <Cascader options={dataitem}
          onChange={onChange}
          placeholder="Please select"
          fieldNames={{ children: "subOptions", value: "value", label: "label" }}
        />
      </Form.Item>
      <Form.Item
        label="地區"
        name="region"
        rules={[{ required: true, message: '請選擇地區' }]}
      >
        <Cascader options={area}
          onChange={onChange}
          placeholder="Please select"
          fieldNames={{ children: "AreaList", label: "AreaName",value:"AreaEngName" }}
        />

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
