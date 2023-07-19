import React, { useState, useEffect } from "react";
import webSocket from "socket.io-client";
import { Row, Col, Button, ConfigProvider, Input, Space } from "antd";
import ChatNavBar from "./ChatNavBar/ChatNavBar";
import ChatBar from "./ChatBar/ChatBar";
import {ChatBody} from "./ChatBody/ChatBody";
const socket = webSocket.connect("http://localhost:9000");

export const Main = () => {
  const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
    //開啟
    setWs(webSocket("http://localhost:9000"));
  };

  useEffect(() => {
    if (ws) {
      //連線成功在 console 中打印訊息
      console.log("success connect!");
      //設定監聽
      initWebSocket();
    }
  }, [ws]);

  const initWebSocket = () => {
    //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
    ws.on("getMessage", (message) => {
      console.log(message);
    });
  };

  const sendMessage = () => {
    //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    ws.emit("getMessage", "只回傳給發送訊息的 client");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: "2rem",
        },
      }}
    >
      <Row
        className="m-5"
        style={{ border: "3px solid #0B7597", borderRadius: "10px" }}
      >
        <Col span={24}>
          <ChatNavBar />
        </Col>
        <Col span={24}>
          <Col style={{ borderTop: "3px solid #0B7597 " }} span={24}>
            <ChatBar />
            <ChatBody/>

          </Col>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
{
  /*  />
<input type="button" value="送出訊息" onClick={sendMessage} /> */
}
