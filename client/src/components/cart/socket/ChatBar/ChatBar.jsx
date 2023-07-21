import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "antd/es/list/Item";

const ChatBar = ({ cart ,setRoomName}) => {
  const [allRoomData, setAllRoomData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8000/cart/getChatList", {
        account: localStorage.getItem("userInfo").slice(1, -1),
      })
      .then((res) => {
        setAllRoomData([...res.data]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#ACE4DD",
        height: "100%",
        borderRadius: 4,
      }}
    >
      {allRoomData.map((item) => {
        return (
          <div
            className="cursorPointer"
            onClick={() => {
              cart.changeChatRoom(item.room);
              setRoomName(item.room)
            }}
          >
            {item.productAccount}
          </div>
        );
      })}
    </div>
  );
};

export default ChatBar;
