import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import '../index.css'

function SketchPad(){

const [num, setNum] = useState(20);
useEffect(()=>{
    setInitValue() 
},[])

const setInitValue = () => {
    const value = 16;
    setNum(value);
}
let black = "white"
const blackFun = () =>{
    black === "white" ? black = "black" : black="white"
    return black;
}
const blackDrawing = (e) =>{
    e.target.style.backgroundColor =black;
}

let div = [];
for(let i=1;i<=num*num;i++){
    div[i] = <div key={i} class="div" style={{ backgroundColor:"white", width:"100%", height:"100%", borderStyle:"solid"}} onMouseOver={blackDrawing}></div>
}

let auto = "";
for(let i=1;i<=num;i++){
    auto += "auto ";
}

const resetButton = () => {
    
    div = [];
    const numPrompt = Number(window.prompt("Enter number between 16 and 100"));
    setNum(numPrompt)
    document.querySelectorAll('.div').forEach(x=>x.style.backgroundColor = "white")
   
    

}






    return(
       <div className="container" >
       <h3 style={{textAlign:"center"}}>Etch-A-Sketch</h3>
     
        <div style={{marginLeft:"30%"}}>
            <button className="buttons" onClick={resetButton} >Reset Board</button>
            <button className="buttons" onClick={blackFun}>Black</button>
            <button className="buttons">Random Color</button>
            <button className="buttons">Clear Board</button>
        </div>
            
        <div className="app" style={{gridTemplateColumns:auto}}>
            { 
                 div.map((item) => {
                    return item;
                })
            }

        </div> 
        <p style={{textAlign:"center", marginTop:"1%", fontSize:"1em"}}>Created by Adnan Ovcina</p>
    </div>
    
    )
}


export default SketchPad;