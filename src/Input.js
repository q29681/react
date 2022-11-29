import './App.css';
import React from 'react';

function Input(){
    const [inputValue, setInputValue] = React.useState("(the)");
    return<>
      <input 
        id='input' 
        type='string' 
        style={{color:'red', border:'1px solid green', backgroundColor:'lightblue'}}
        value={inputValue} 
        onInput={(e) =>{
            const newValue = e.target.value;
            setInputValue(newValue);
        }}>
      </input>
      <div>
        <p>the country you typed is: {inputValue}</p>
      </div>
      </>
  
}

export default Input;