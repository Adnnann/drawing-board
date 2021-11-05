import { useEffect, useState } from "react";
import '../index.css'

function SketchPad(){

const [num, setNum] = useState(20);
const [colorStatus, setColorStatus] = useState("");

useEffect(()=>{
    setInitValue() 
},[])

const setInitValue = () => {
    const value = 16;
    setNum(value);
}
const blackFun = () =>{
    setColorStatus("blackAndWhite");
}

const colorFun = () =>{
    setColorStatus("randomColors");
}
const colorSetter = (e) =>{
    if(colorStatus === 'blackAndWhite'){
        e.target.style.backgroundColor = "black";
    }else if(colorStatus === 'randomColors'){
        var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        e.target.style.backgroundColor = random_color;
    }else{
        e.target.style.backgroundColor = random_color;
    }
}

let div = [];
for(let i=1;i<=num*num;i++){
    div[i] = <div key={i} className="div" style={{ backgroundColor:"white", width:"100%", height:"100%", borderStyle:"solid"}} onMouseOver={colorSetter}></div>
}

let auto = "";
for(let i=1;i<=num;i++){
    auto += "auto ";
}

const resetBoard = () => {
    div = [];
    const numPrompt = Number(window.prompt("Enter number between 16 and 100"));
    if(numPrompt < 16 || numPrompt > 100){
        return alert("Please enter value between 16 and 100")
    }else{
        setNum(numPrompt);
    }
    document.querySelectorAll('.div').forEach(x=>x.style.backgroundColor = "white")
}

const clearBoard = () => {
    document.querySelectorAll('.div').forEach(x=>x.style.backgroundColor = "white");
}

    return(
       <div className="container" >
        <h3 style={{display:"inline"}}>Etch-A-Sketch</h3>
            <div style={{marginLeft:"10%"}}>
            
                <button className="buttons" onClick={resetBoard} >Reset Board</button>
                <button className="buttons" onClick={blackFun}>Black</button>
                <button className="buttons" onClick={colorFun}>Random Color</button>
                <button className="buttons" onClick={clearBoard}>Clear Board</button>
            </div>
                
            <div className="app" style={{gridTemplateColumns:auto, display:"grid"}}>
                { 
                    div.map((item) => {
                        return item;
                    })
                }

            </div> 
            <p style={{textAlign:"center", marginTop:"1%", fontSize:"1em", display:"inline-grid"}}>Created by Adnan Ovcina</p>
        </div>
    )
}


export default SketchPad;