import { Form, Input, Button, Cascader, ConfigProvider } from 'antd';
import dataitem from "../../data/item2.json";
import axios from "axios";
import area from "../../data/CityCountyDataAAA.json";
import Prconly2 from './upimg'
import { useState } from "react"
import zhCN from 'antd/locale/zh_TW'

import "./up.scss";

const Up = () => {
  const [data, setdata] = useState([])
  console.log(data)

  const onFinish = async (values) => {
    try {
      // 進行解構賦值操作，將 values 物件的某些屬性拆分成單獨的變數
      // 物件中的 region 和 category 屬性拆分出來，並將其餘的屬性放在 otherValues 物件中
      const { region, category, ...otherValues } = values;
      // 再次使用解構賦值將 region 陣列的兩個元素分別賦值給 cityCounty 和 area 這兩個變數
      const [cityCounty, area] = region;
      // 將所選擇的商品分類拆分為大類和小類
      const [productCategoryId, productCategoryChild] = category;

      // 找網頁的登入帳號
      const user = localStorage.getItem('userInfo').slice(1, -1);

      // 整理資料，將所有需要傳遞給後端的資料整合成一個物件
      const formData = {
        ...otherValues,
        user,
        cityCounty,
        area,
        productCategoryId,
        productCategoryChild,
      };

      // 提交整理後的資料到後端
      const response = await axios.post(`http://localhost:8000/api/fastup/${user}`, formData);
      console.log(response.data); // 假設後端返回一些數據
      console.log(user);
    } catch (error) {
      console.error(error);
    }

    // const formData = new FormData();
    // data.forEach(async (item, index) => {
    //   formData.append(`photo`, item.originFileObj)
    //   try {
    //     formData.append(`account`, localStorage.getItem("userInfo").slice(1, -1))

    //     let apple = ""

    //     await axios.post(`http://localhost:8000/test`, {
    //       formData
    //     }).then((result)=>{
    //       result&&console.log(result)
    //     })

    //   } catch (error) {
    //     console.error(error);
    //   }
    // })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <ConfigProvider 
    locale={zhCN}>
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
        {/* <Upload
          action="http://localhost:8000/test"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange2}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ Upload'}
        </Upload> */}
        <Prconly2 setdata={setdata} />
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
    </ConfigProvider>
  );
};

export default Up;