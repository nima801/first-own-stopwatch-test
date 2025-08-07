import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
let interval;
class Timer extends React.Component{
   constructor(){
    super();
    this.state = {
        time : 10
    }
   }
   startInterval = ()=>{
    clearInterval(interval)
    interval = setInterval(()=>{
        this.setState({time : this.state.time -1})
    },1000)
   }
   stopInterval = ()=>{
    clearInterval(interval)
   }
//    componentDidMount(){
//     this.startInterval()
//    }
   componentDidUpdate(){
    if (this.state.time == 0){
        this.stopInterval()
    }
   }

   resetInterval = ()=>{
    clearInterval(interval)
    this.setState({
        time : 10
    })
   }

   componentWillUnmount(){}



   render(){
    return(
        <div className="timerBox">
            <div className='timeTxt'>{this.state.time}</div>
            
            <div className='timer'>
             <button className='watchButton buttonStart' onClick={this.startInterval}>Start</button>
             <button className='watchButton buttonStopp' onClick={this.stopInterval}>Stop</button>
             <button className='watchButton buttonReset' onClick={this.resetInterval}>reset</button>
            </div>
       </div> 
        
    )
   }
}

export default Timer;