import { Col, Row } from "react-bootstrap";
import '../index.css'

function SketchPad(){

let num = 16;
let div = [];
let auto = "";

    for(let i=1;i<=num*num;i++){
        div[i] = <div key={i} style={{ backgroundColor:"white", width:"100%", height:"100%", borderStyle:"solid"}}></div>
    }
    for(let i=1;i<=num;i++){
        auto += "auto "
    }

    return(
       <div className="container" >
       <h3 style={{textAlign:"center"}}>Etch-A-Sketch</h3>
     
        <div style={{marginLeft: "20%"}}>
            <button className="buttons">Reset Board</button>
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