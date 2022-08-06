import React, { useEffect,  useState } from 'react'
import '../component-page/timer.css'

const Timer= () => {
    const[Second,setSecond]=useState(0);
    const[Min,setMin]=useState(25);
    const[TimerBreak, setTimerBreak] = useState(false);
    var timer;
    useEffect(()=>{
        timer=setInterval(()=>{
            setSecond(Second-1);
            if(Second===0){
                setMin(Min-1);
                setSecond(59);
            }

            if(Min == 0  && Second == 0) {
                if(!TimerBreak) {
                    setSecond(0)
                    setMin(5)
                    setTimerBreak(true);
                } else {
                    setSecond(0);
                    setMin(25);
                    setTimerBreak(false);
                }
            }
        },1000);


        return()=>clearInterval(timer); //call back function 
    });
   
const reset=()=>{
   setMin(25);
   setSecond(59)
}
const start=()=>{
    setMin(Min);
   setSecond(Second-1)
}
const pause=()=>{
    clearInterval(timer);
}
  return (
    <div className='timer'>
        <div className='container'>
            <div className='timer-container'>
                <h1>Timer</h1>
                <h1>{Min<10?"0"+Min:Min}:{Second<10?"0"+Second:Second}</h1>

                {TimerBreak ? "You are on  a 5 min break." : "Your 25 min timer is running."}
                <button className='start' onClick={start}>Start</button>
                <button className='reset' onClick={reset}>Reset</button>
                <button className='pause' onClick={pause}>Push</button>
            </div>
        </div>
    </div>
  )
}

export default Timer