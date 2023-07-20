import React, { useState } from 'react';
import { Form, Input, Checkbox, message, Button, Upload, Image, Cascader } from 'antd';
import dataitem from "../../data/item2.json";
import area from "../../data/CityCountyDataAAA.json";

// import "./up.scss";

const Up = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const getImgs = () => {
    return fileList.map(file => file.name);
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handlePreview = file => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewVisible(true);
  };

  const handleUpload = async ({ file, fileList }) => {
    if (file.status === 'done') {
      const result = file.response;
      if (result.status === 0) {
        message.success('上传图片成功');
        const { name, url } = result.data;
        file = fileList[fileList.length - 1];
        file.name = name;
        file.url = url;
      } else {
        message.error('上传图片失败');
      }
    } else if (file.status === 'removed') {
      const reqDeleteImg = async imageName => {
        return {}; // 根据实际情况实现删除图片的请求
      };

      const result = await reqDeleteImg(file.name);
      if (result.status === 0) {
        message.success('删除图片成功！');
      } else {
        message.error('删除图片失败！');
      }
    }
    setFileList(fileList);
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
        <Upload
          beforeUpload={handleUpload}
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onRemove={file => {
            handleUpload({ file, fileList: [] });
          }}
        >
          {previewImage ? (
            <Image
              src={previewImage}
              alt="Preview"
              style={{ width: '100px', height: '100px' }}
            />
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
        <Cascader
          options={dataitem}
          onChange={onChange}
          placeholder="請選擇商品分類"
          fieldNames={{ children: "subOptions", value: "value", label: "label" }}
        />
      </Form.Item>

      <Form.Item
        label="地區"
        name="region"
        rules={[{ required: true, message: '請選擇地區' }]}
      >
        <Cascader
          options={area}
          onChange={onChange}
          placeholder="請選擇地區"
          fieldNames={{ children: "AreaList", label: "Name", value: "Name" }}
        />
      </Form.Item>

      <Form.Item
        label="商品描述"
        name="description"
        rules={[{ required: true, message: '請輸入商品描述' }]}
      >
        <Input.TextArea
          maxLength={300}
          placeholder="請輸入商品描述，限300字內"
        />
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
