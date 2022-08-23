import React from "react";
import img from "./1f60b.png";
import "./header.css";
function Header() {
  return (
    <div className="hd">
      <img src={img} alt="Smile"></img>
      <h1>Emoji Search</h1>
      <img src={img} alt="Smile"></img>
    </div>
  );
}

export default Header;
