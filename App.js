
import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0) 
  
  const donwFunc = () => {
    if(count >= 1) {
      setCount(count - 1)
    }
    return
  }
  
  const upFunc = () => {
    if(count <= 9) {
      setCount(count + 1)

    }
    return
  }
  return (
    <div className="App">
   <div>{count}</div>
   <button onClick={upFunc}>Up</button>
   <div>
   <button onClick={donwFunc}>Down</button>
   </div>
  </div>
    
  );
}

export default App;
