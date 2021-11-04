import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import '../index.css'

function SketchPad(){

const [num, setNum] = useState(16);
const [div, setDiv] = useState([]);
let [auto, setAutoGen] = useState("");

useEffect(()=>{
    setInitValue();
    autoGen(num);
    test(num);   
},[])



//let div = [];
//let auto = "";
let value = 50;


const setInitValue = () => {
    setNum(value);
}

const test = num => {
    let test = [];
    for(let i=1;i<=num*num;i++){
        test[i] = <div key={i} style={{ backgroundColor:"white", width:"100%", height:"100%", borderStyle:"solid"}}></div>
        setDiv([...div,test]);
    }
    

}

let nesto = "";
const autoGen = num =>{
    for(let i=1;i<=num;i++){
        nesto += "auto ";
       console.log(nesto)
}
setAutoGen(nesto);
    
}

const resetBoard = () => {
    
    const numDiv= window.prompt("Enter number between 16 and 100 to generate new pad")
    //setNum(numDiv);
    autoGen(numDiv);
    test(numDiv);
    // console.log(auto);
}

    return(
       <div className="container" >
       <h3 style={{textAlign:"center"}}>Etch-A-Sketch</h3>
     
        <div style={{marginLeft: "20%"}}>
            <button className="buttons" onClick={resetBoard} >Reset Board</button>
            <button className="buttons">Black</button>
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