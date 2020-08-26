import React from "react";

export default function MyInput({ chatRoomList }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={handlePostMessage}>
        Send message
      </button>

      <ul className="list-group mt-3 mx-auto" style={{ width: "50vw" }}>
        {chatRoom.messages &&
          Object.entries(chatRoom.messages)
            .reverse()
            .map((item) => {
              const key = item[0];
              const payload = item[1];

              return (
                <li className="list-group-item text-wrap" key={key}>
                  {payload.message}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
