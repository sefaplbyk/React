import React from "react";

function ListDefault({ emoji, handleClick, text }) {
  const defaultList = emoji.slice(0, 20);
  return (
    <div>
      {defaultList.map((item, i) => (
        <div className="li" key={i} onClick={() => handleClick(item.symbol)}>
          <div>
            <span className="is">{item.symbol}</span>
            <span className="it">{item.title}</span>
          </div>
          <span className="cr">Emojiyi kopyalamak için tıklayınız</span>
        </div>
      ))}
    </div>
  );
}

export default ListDefault;
