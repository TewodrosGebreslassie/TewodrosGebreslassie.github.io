import React, { ReactNode }  from "react";
// type Props={
//     name:string,
//     age:number,
//     isTrue:boolean,
//     list:string[],
//     obj:{name:string,lNmame:string
//     }
//     callback:()=>void
//     child:ReactNode
// }


type props={msg:string,
    count:number,
}

export default function Son(props:props){
    const {msg, count}=props
 
// return will be from parent (msg)+ child component 
    return (<div>{msg} This is son Component! <h1>{count}</h1>
    <div>
        </div></div>)
}

type Mssg={
    children:ReactNode
}

export function SonTwo(props:Mssg){
const {children}=props
    return(<div>{children}</div>)
}