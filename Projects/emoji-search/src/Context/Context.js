import { createContext, useContext, useState } from "react";

import emojiJson from "../emoji.json";

const MainContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState(emojiJson);

  const [text, setText] = useState("");

  const values = {
    emoji,
    setEmoji,
    text,
    setText,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useEmoji = () => useContext(MainContext);
