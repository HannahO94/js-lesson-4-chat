import React from "react";
import { useEffect, useState } from "react";
import Messages from "../components/Messages";

export default function ChatRoom() {
  const CHAT_ROOM_URL =
    "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json";

  let [chatRoom, setChatRoom] = useState({});

  function handleGetChatRoom() {
    const url = CHAT_ROOM_URL;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setChatRoom(data));
  }
  useEffect(() => {
    handleGetChatRoom();
  }, []);
  return (
    <div className="container">
      <h1>{chatRoom.name}</h1>
      <Messages chatRoom={chatRoom} handleGetChatRoom={handleGetChatRoom} />
    </div>
  );
}
