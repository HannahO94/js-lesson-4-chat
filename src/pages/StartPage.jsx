import React from "react";
import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div>
      <h1>Välkommen till Chatrooms</h1>
      <Link className="btn btn-primary btn-block" to="/chatroom">
        Chatroom
      </Link>
      <Link className="btn btn-primary btn-block" to="/add-chatroom">
        New Chatroom
      </Link>
    </div>
  );
}
