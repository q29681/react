import React from 'react';
import './Counter.css';

function Counter(){
    const [number, setNumber] = React.useState(1);
    return<>
    <div className="wrapperr">
    <button 
        className="button"
        onClick ={() => {
            setNumber(number -1);
        }}>
    -</button>

    <div className="number">{number}</div>
    <button 
        className="button"
        onClick ={() => {
            setNumber(number + 1);
        }}> 
    +</button>
    </div>
    </>
    }

    export default Counter; 