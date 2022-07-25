import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);


  useEffect(() => {
    console.log("Companent mount edildi");

    const interval =setInterval(() => {
      // n numberi temsil ediyor
      setNumber((n) => n + 1);
    }, 1000);

    //unmount anını yani companentin kalktığı anı return ile yakalarız
    // return ()=>console.log("Companent unmount edildi")
    return ()=>clearInterval(interval)
  }, []);
  // Bağımlılık arrayi boş bırakılırsa companent didmount(yüklendiği) edildiği anı yakalarsın demek oluyor

  useEffect(() => {
    console.log("number stategüncellendi");
  }, [number]);

  

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

    </div>
  );
}

export default Counter