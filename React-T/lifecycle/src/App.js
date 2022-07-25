import Counter from "./companents/Counter";
import {useState} from "react"
function App() {
 const [isVisible,setIsVisible] = useState(true)
  return (
    <div className="App">
      {/* isVisible true iken counteri çalıştır */}
      {isVisible && < Counter/>}
      <br></br>
      <button onClick={()=>setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}
export default App;
