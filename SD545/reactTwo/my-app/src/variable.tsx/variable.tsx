import { time } from "console";
import React from "react";

export default function Variable(){

    const firstName='bob ';
    const lastName='marlly'
    const date= new Date();
    const hours =date.getHours()

    let timeOfDay;
    if(hours<12){
        timeOfDay ='morning'
    }
    else if(hours>=12){
         timeOfDay ='afternoon'

    }
    else{timeOfDay='night'}
    
   

return (<div>
     <h1>Hello {`${firstName}${lastName}`}</h1>
       <h1>It is Currently about {date.getHours()%12} o'clock!</h1>
    <h1>Good {timeOfDay}</h1>
    </div>)
    }
   
    // return(<div>
    //     <h1>Hello {`${firstName}${lastName}`}</h1>
    //     <h1>It is Currently about {date.getHours()%12} o'clock!</h1>
    // </div>)

