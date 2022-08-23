import React from "react";
import { useEmoji } from "../Context/Context";
import "./search.css";
function Search() {
  const { text, setText } = useEmoji();
  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    setText(text);
  };
  return (
    <div className="srcd">
      <input
        placeholder="Search for emoji"
        type="text"
        value={text}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Search;
