
// // butten click with count


// import { useState } from "react";
// import FirstComponent from "./components/FirstComponent";

// const App = () => {
// const [x,setx] =useState(0); //initial value starts with 0
// const btnclick=()=>{
//   console.log("clicked");
//   setx(x+1); 
//   console.log(x);
//   }

//   return (
//     <div>
// <button onClick={()=>{btnclick()}}>click me</button>
// <FirstComponent data={x} fn={setx}/>

//     </div>
//   )
// }

// export default App


//use reff




// to see the what we textedd while clicking on sumbit ,the text is showun in the console for that we need to use the below <code className=""></code>

// const App = () => {

//   const inputRef=useRef(null);
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={()=>{console.log(inputRef.current.value);}}>Submit</button>
//     </div>
//   )
// }

// export default App

// Exp-2

// import React, { useState } from 'react';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputValue);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;



// Code below= it will show the text which we entertde and sumbit in the below inout field
// import React, { useState } from 'react';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [submittedValue, setSubmittedValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputValue);
//     setSubmittedValue(inputValue);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Submitted Text:</h2>
//         <p>{submittedValue}</p>
//       </div>
//     </div>
//   );
// };

// export default App;





// The below code shoes the list of text one by one which we 
// entered in the input field when we click on submit.



// import React, { useState } from 'react';

// const App = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [submittedValues, setSubmittedValues] = useState([]);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputValue);
//     setSubmittedValues([...submittedValues, inputValue]);
//     setInputValue(''); // Clear input field after submission
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleChange} />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Submitted Texts:</h2>
//         <ul>
//           {submittedValues.map((value, index) => (
//             <li key={index}>{value}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;





import Todo from './components/Todo'

const App = () => {
  return (
    <div>
      <Todo/>
      <h1></h1>
    </div>
  )
}

export default App



