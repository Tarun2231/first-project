import { useState } from "react";

const App = () => {

  // let data ="girl";

// event handling

const [x,setx] =useState(0);

const btnclick=()=>{
  console.log("clicked");
  setx(x+1);
  console.log(x);
  }

  return (
    <div>
      {x}
      {/* {data==="boy"?<h1>boy</h1>:<h1>girl</h1>} */}

<button onClick={()=>{btnclick()}}>click me</button>

    </div>
  )
}

export default App
