import React, { type ReactNode } from "react";

type Props={
    age:number,
    name:string
    isLoggedIn:boolean,
    fruits:string[],
    person:{fName:string, lName:string},
    callBack:()=>void,
child:ReactNode}
export default function ParentToChildData(props:Props){

    return (<div>
personal Detail name:{props.name} age:{props.age}, 
login:{props.isLoggedIn} fruits:{props.fruits.map(ele=>( ele+" "))}, 
firstName:{props.person.fName}, LastName:{props.person.lName}, {props.child}
<button onClick={props.callBack}>clickme</button>
    </div>)

}