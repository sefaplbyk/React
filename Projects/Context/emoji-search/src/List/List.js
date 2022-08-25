import React, { useState } from "react";
import "./list.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEmoji } from "../Context/Context";
import ListDefault from "./ListDefault";

function List() {
  const { emoji, text } = useEmoji();
  const [symbol, setSymbol] = useState("");
  const handleClick = (symbol) => {
    setSymbol(symbol);
    navigator.clipboard.writeText(symbol);
    toast.success(`Emoji Kopyalandı`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const filteredData = emoji.filter(
    (item) => item.keywords.includes(text) || item.title.includes(text)
  );
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {text === "" ? (
        <ListDefault text={text} handleClick={handleClick} emoji={emoji} />
      ) : (
        filteredData.map((item, i) => (
          <div
            data-testid="row"
            className="li"
            key={i}
            onClick={() => handleClick(item.symbol)}
          >
            <div>
              <span className="is">{item.symbol}</span>
              <span className="it">{item.title}</span>
            </div>
            <span className="cr">Emojiyi kopyalamak için tıklayınız</span>
          </div>
        ))
      )}
    </div>
  );
}

export default List;
