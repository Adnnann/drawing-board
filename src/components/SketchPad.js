import { Col, Row } from "react-bootstrap";

function SketchPad(){

let div = [];

    for(let i=0;i<100;i++){

        // const div = document.createElement("div");
        // div.style.borderColor = "black";
        div[i] = <div key={i} style={{borderColor:"black", borderStyle:"outset", backgroundColor:"red"}}>{i}</div>
        // div[i] = div.appendChild(div);
        //<Row><div key={i} style={{borderStyle:"solid",backgroundColor:"red", float:"right"}}>Test</div></Row> 

        }
            
            
            






    return(
        <div className="container">
            { 
                 div.map((item) => {
                    return(
          
                        <Col style={{display:"grid"}}>{item}</Col>
                                  

            
                    );
                })
            }
        </div> 
    )
}


export default SketchPad;