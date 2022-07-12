import React, { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";

function Store() {
  const [todos, setTodos] = useState([]);

  // Listelemede footerdan gelen bilgiyi alabilmek için hide adında string değer tutan bir state oluştuyoruz. Varsayılan değeri 'All'
  const [hide, setHide] = useState("All");
  return (
    <div>
      {/* import ettiğimiz componentleri gösteriyoruz. */}
      {/* Oluşturduğumuz todos state'tini formumuza gönderiyoruz. */}
      <Header todos={todos} setTodos={setTodos} />
      <Main todos={todos} setTodos={setTodos} hide={hide} />
      <Footer todos={todos} setTodos={setTodos} setHide={setHide} />
    </div>
  );
}

export default Store;
