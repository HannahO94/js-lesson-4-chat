import React from "react";
import { useRef } from "react";
import MyInput from "./MyInput";

export default function Messages({ chatRoom, handleGetChatRoom }) {
  const MESSAGE_LIST_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json";

  const messageInputField = useRef();
  const userInputField = useRef();

  function handlePostMessage() {
    const url = MESSAGE_LIST_URL;
    const data = {
      message: messageInputField.current.value,
      user: userInputField.current.value,
    };
    messageInputField.current.value = null;
    userInputField.current.value = null;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        handleGetChatRoom();
      });
  }

  return (
    <div className="form-group">
      <div className="form-row col-sm-10">
        <p>Message:</p>
        <input className="form-control" ref={messageInputField} type="text" />
      </div>
      <div className="form-row col-sm-10">
        <p>User:</p>
        <input className="form-control mb-3" ref={userInputField} type="text" />
      </div>
      <MyInput handlePostMessage={handlePostMessage} chatRoom={chatRoom} />
    </div>
  );
}
