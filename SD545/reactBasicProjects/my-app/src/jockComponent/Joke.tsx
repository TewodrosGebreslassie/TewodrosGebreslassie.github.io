import React from "react";

type JockData={
    id?:number,
    punchLine:string,
     question:string}


     export function JockComponent(props:JockData){
        return (
            <div>
                <h3 style={{display: !props.question ? 'none' : 'block'}}>Question: {props.question}</h3>
                <h3 style={{color: !props.question ? '#888888' : 'inherit'}}>Answer: {props.punchLine}</h3>
            </div>
        );
    }
    
    export default JockComponent;