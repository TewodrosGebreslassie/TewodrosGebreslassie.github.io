import React from "react";
import ParentToChildData from "./ParentTochildData";

export default function passDHandler(){
    return(
        <div>    <ParentToChildData age={20} name='Teddy'  isLoggedIn={false} fruits={['banana','orange', 'apple']}
        callBack={()=>console.log('call back passed to son from App')} person={{fName:'tedy',lName:'geddya'}} 
        child={<span>This is a span child</span>}/></div>)
    
}