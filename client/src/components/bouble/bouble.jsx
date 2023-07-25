import React from 'react';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { Link } from 'react-router-dom';
import './bouble.scss'
const Bouble = () => (
  <div id='bouble'>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{
        left: 40,
        
      }}
      icon={<CustomerServiceOutlined />}
   
    >
      <Link to="/"> 
        <FloatButton />
      </Link>
      <Link to="/other-page"> 
        <FloatButton icon={<CommentOutlined />} />
      </Link>
    </FloatButton.Group>
  </div>
);

export default Bouble;
