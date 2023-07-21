import React, { useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ChatBody = ({ messages }) => {
  const navigate = useNavigate();
  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/cart");
    window.location.reload();
  };

  const scrollContainerRef = useRef(null);

  // 滚动到底部
  const scrollToBottom = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  useEffect(()=>{
    scrollToBottom()
  })

  return (
    <>
      <div
        ref={scrollContainerRef}
        id="scroll"
        className="scroll-container"
        style={{ height: "500px", overflow: "auto" ,backgroundColor:"white"}}
      >
        {messages.map((message) => {
          if (message.name === localStorage.getItem("userName")) {
            return (
              <div
                key={message.id}
                style={{
                  maxWidth: "300px",
                  backgroundColor: "#ADFF2F",
                  borderRadius: "10px",
                  marginLeft: "auto",
                  paddingLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {message.text}
              </div>
            );
          } else {
            return (
              <div
                key={message.id}
                style={{
                  backgroundColor: "#DCDCDC",
                  maxWidth: "300px",
                  borderRadius: "10px",
                  paddingLeft: "10px",
                  marginTop: "10px",
                }}
              >
                {message.text}
              </div>
            );
          }
        })}

        {/* 当有用户正在输入，则被触发 */}
        <div style={{ bottom: "0px", right: "0px", position: "absolute" }}>
          正在輸入...
        </div>
      </div>
    </>
  );
};
