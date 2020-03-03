import React,{useState} from 'react';
import Form from './components/form'
import Timer from './components/timerDisplay'

const App = (props) => {
    const [hour,setHour] = useState(0)
    const [min,setMin] = useState(0)
    const [sec,setSec] = useState(0)
    const [displayHour,setDisplayHour] = useState(0)
    const [displayMin,setDisplayMin] = useState(0)
    const [displaySec,setDisplaySec] = useState(0)
    let ts
    
    
    
    const handleHourChange = (event) => {
        //console.log(event.target.value)
        setHour(Number(event.target.value))
    }
    const handleMinChange = (event) => {
        //console.log(typeof event.target.value)
        setMin(Number(event.target.value))
    }
    const handleSecChange = (event) => {
        //console.log(event.target.value)
        setSec(Number(event.target.value))
    }
    
    
    const setTimer = (event) => {
        //console.log(event)
        event.preventDefault()
        
        ts = hour*60*60 + min*60 + sec
        //console.log(ts)
        clearInterval(App.timeID)
        App.timeID = setInterval(timerFunc,1000)
        
    }
    const timerFunc = () => {
        
        let distance = ts * 1000;
        //console.log(distance)
        let hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
        let mins = Math.floor((distance%(1000*60*60))/(1000*60))
        let secs = Math.floor((distance%(1000*60))/1000)
        //console.log()
        setDisplayHour(hours)
        setDisplayMin(mins)
        setDisplaySec(secs)
        ts--
        if(ts < 0){
            //console.log("he")
            clearInterval(App.timeID)
        }
        
    }
    
    return(
    
        
        <div>
        
            <Form hr={hour} mn={min} sc={sec} hrChange={handleHourChange} minChange={handleMinChange} secChange={handleSecChange} submit={setTimer} />
            <Timer hr={displayHour} mn={displayMin} sc={displaySec} />
            
        </div>
    
    )
    
}
App.timeID = 0
export default App;
