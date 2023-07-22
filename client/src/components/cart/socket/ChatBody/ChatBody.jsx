import React, { useRef, useEffect } from "react";

export const ChatBody = ({ roomName, socket,setRemoveRoom, setMessages, messages }) => {

  socket.on(`${roomName}`, (data) => {
    setRemoveRoom(roomName)
    data.roomName === roomName && setMessages([...messages, data]);
    socket.off(`${roomName}`);
    console.log(messages);
  });

  const scrollContainerRef = useRef(null);

  // 滚动到底部
  const scrollToBottom = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  });

  return (
    <>
      <div
        ref={scrollContainerRef}
        id="scroll"
        className="scroll-container"
        style={{ height: "500px", overflow: "auto", backgroundColor: "white" }}
      >
        {messages.map((message) => {
          if (message.name === localStorage.getItem("userName")) {
            return (
              <>
                <div
                  style={{
                    textAlign: "end",
                    marginLeft: "auto",
                    paddingLeft: "10px",
                    marginTop: "10px",
                    fontSize: "1rem",
                  }}
                >
                  自己
                </div>
                <div style={{ display: "flex", alignItems: "end" }}>
                  <div
                    style={{
                      width: "300px",
                      marginLeft: "auto",
                      textAlign: "end",
                      paddingRight: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    {message.date}
                  </div>
                  <div
                    key={message.id}
                    style={{
                      maxWidth: "300px",
                      backgroundColor: "#ADFF2F",
                      borderRadius: "10px",
                      marginLeft: "auto",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      wordBreak: "break-word",
                      height: "auto",
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div
                  style={{
                    maxWidth: "300px",
                    paddingLeft: "10px",
                    marginTop: "10px",
                    fontSize: "1rem",
                  }}
                >
                  {message.name}
                </div>
                <div style={{ display: "flex", alignItems: "end" }}>
                  <div
                    key={message.id}
                    style={{
                      backgroundColor: "#DCDCDC",
                      maxWidth: "300px",
                      borderRadius: "10px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      wordBreak: "break-all",
                      height: "auto",
                    }}
                  >
                    {message.text}
                  </div>
                  <div
                    style={{
                      maxWidth: "300px",
                      textAlign: "end",
                      paddingLeft: "10px",
                      fontSize: "1rem",
                    }}
                  >
                    {message.date}
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};
