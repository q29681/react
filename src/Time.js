import './App.css';
import React from 'react';

function Time(){
    const [second, setSecond] = React.useState(1);
    const [nowTime, setTime] = React.useState(new Date());
    React.useEffect(() =>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, second*1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [second]);
    
    return<>
    <p>Time: {nowTime.toLocaleString()}</p>
    <input
        value={second}
        onInput ={(e) =>{
            setSecond(e.target.value);
        }}></input>
    </>
}

export default Time;