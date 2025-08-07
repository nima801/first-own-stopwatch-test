import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./Helo"
import Timer from "./Timer";


class Allin extends React.Component{

 constructor(){
  super();
  this.state = {
    title : "Let's Use StopWatch"
  }

 }

  render(){
    return(
      <div className='main'>
        <Hello title = {this.state.title}/>
        <Timer/>
      </div>
    )
  }

}


ReactDOM.createRoot(document.getElementById("root")).render(<Allin/>)





