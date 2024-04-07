import React, { useState } from "react";


type Cback={
    getTitle:(titl:string)=>void
}
export default function childToParentCom(props:Cback){
const [childMessage, setChildMassage] =useState('This is from child i will send you a title');
const {getTitle}=props;

const handleCallbach=()=>{
    setChildMassage(childMessage+" -+edited")
}
getTitle(childMessage)
return(<div>
    this is child massage
   {childMessage}
</div>)

}