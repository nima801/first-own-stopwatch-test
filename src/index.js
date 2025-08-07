import React ,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client';
import Hello from "./Helo"
import Timer from "./Timer";



const Allin = ()=>{
  let [isLight,setIsLight] = useState(false)
  let handlesetIsLight = ()=>{
    setIsLight(!isLight)
  }
  let [txt , setTxt] = useState("Welcome to use DLmode")

  useEffect(()=>{
    console.log("useEffect used");
    return ()=>{

    }
  },[isLight])

  return (
    <div className='main' style={{background: isLight ? "white" : "black"}}>
        <Hello txt={txt}/>
        <Timer isLight={isLight} handlesetIsLight={handlesetIsLight} />
    </div>
  )

}
// class Allin extends React.Component{

//  constructor(){
//   super();
//   this.state = {
//     title : "Let's Use StopWatch"
//   }

//  }

//   render(){
//     return(
//       <div className='main'>
//         <Hello title = {this.state.title}/>
//         <Timer/>
//       </div>
//     )
//   }

// }


ReactDOM.createRoot(document.getElementById("root")).render(<Allin/>)





