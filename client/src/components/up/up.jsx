import { Form, Input, Button, Cascader } from 'antd';
import dataitem from "../../data/item2.json";
import axios from "axios";
import area from "../../data/CityCountyDataAAA.json";
import Prconly2 from '../upimg'

import "./up.scss";

const Up = () => {
  const onFinish = async (values) => {
    try {
      // 將所選擇的地區拆分為 area 和 cityCounty
      const { region, category, ...otherValues } = values;
      const [cityCounty, area] = region;

      // 將所選擇的商品分類拆分為大類和小類
      const [productCategoryId, productCategoryChild] = category;

      // 找網頁的登入帳號
      const useract = localStorage.getItem('userInfo');
      // 確認 userInfo 的值不是空值（null）再進行 slice 操作
      const user = useract.slice(1, -1) 

      // 整理資料
      const formData = {
        ...otherValues,
        user,
        cityCounty,
        area,
        productCategoryId,
        productCategoryChild,
      };
      // 提交整理後的資料到後端
      const response = await axios.post(`http://localhost:8000/api/fastup/${user}`, {formData});
      console.log(response.data); // 假設後端返回一些數據
      console.log(user); // 假設後端返回一些數據
    } catch (error) {
      console.error(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        name="rent"
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

      <Form.Item label="照片" name="imageSrc" valuePropName="fileList">
        <Prconly2 />
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
        name="productDetail"
        rules={[{ required: true, message: '請輸入商品描述' }]}
      >
        <Input.TextArea
          maxLength={300}
          placeholder="請輸入商品描述，限300字內"
        />
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