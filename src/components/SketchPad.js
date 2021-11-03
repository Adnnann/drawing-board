import { Col, Row } from "react-bootstrap";

function SketchPad(){

let num = 10;
let div = [];
let auto = "";
    for(let i=1;i<=num*num;i++){

        // const div = document.createElement("div");
        // div.style.borderColor = "black";
        div[i] = <div key={i} style={{ backgroundColor:"white",width:"min-width", borderStyle:"solid", height:"min-height"}}>.</div>
        // div[i] = div.appendChild(div);
        //<Row><div key={i} style={{borderStyle:"solid",backgroundColor:"red", float:"right"}}>Test</div></Row> 
        }
        for(let i=1;i<=num;i++){
            auto += "auto "
            }

        


console.log(auto)


    return(
        
        <div style={{gridTemplateColumns:auto, width:"960px", display:"grid", marginLeft:"20%"}}>
            { 
                 div.map((item) => {
                    return(
          
                        item
                                  

            
                    );
                })
            }

        </div> 
    )
}


export default SketchPad;