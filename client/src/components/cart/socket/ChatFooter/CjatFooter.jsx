import React from 'react';
import {} from 'antd'
export const ChatFooter = ()=>{
    return(

          <Col span={24}>
            <Space.Compact style={{ width: "100%" }}>
              <Input />
              <Button
                size="large"
                style={{ height: "47px", width: "100px" }}
                icon={"送出"}
              ></Button>
            </Space.Compact>
          </Col>
    )
}