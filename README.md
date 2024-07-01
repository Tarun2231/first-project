# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


=> If Rafc is not coming then we need to install ES& React/Redux in extention.



=>
In App.jsx
for the input text ,what ever we are submiting by clicking on submit, the text should be showed in the console for that the bow code is needded.

const App = () => {

  const inputRef=useRef(null);
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={()=>{console.log(inputRef.current.value);}}>Submit</button>
    </div>
  )
}

export default App



exp-2
import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
