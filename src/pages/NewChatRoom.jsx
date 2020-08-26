import React from "react";
import { useState, useEffect } from "react";
import MyNewInput from "../components/MyNewInput";

export default function NewChatRoom() {
  const NEW_CHAT_ROOM_URL =
    "https://mock-data-api.firebaseio.com/chatrooms.json";
  let [chatRoomList, getChatRoomList] = useState({});

  function handlePostChatRoom() {
    const url = NEW_CHAT_ROOM_URL;
    const data = {
      name: "funkar rum?",
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    handlePostChatRoom();
  }, []);
  return (
    <div>
      <div className="container">
        <h1>Skapa ett nytt chatroom</h1>
      </div>
      <div className="form-group">
        <div className="form-row col-sm-10">
          <p>Namn på chatroom</p>
          <input className="form-control" type="text" />
        </div>
      </div>
      <button className="btn btn-primary">Skapa chatroom</button>
    </div>
  );
}

// RoomInputField.current.value,
