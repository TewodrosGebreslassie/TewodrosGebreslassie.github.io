import React from "react";

type Contact={
    name:string;
    imgUrl:string;
    phone:string;
    email:string
}
export default function ContentCard(props:Contact){

    return (<div className="contacts">
      <img src={props.imgUrl} alt="" />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <a href="https://goofle.com">This is the link</a>
      <input placeholder="First Name" type="" />
<img src={props.imgUrl} alt="" />
    </div>)
}

// function addNumber(num1:number,num2:number){
//     return num1 +num2
// }