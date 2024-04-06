import React from "react";

export default function MappingComponent(){
 const nums =[1,2,3,4,5,6,7,8,9,10]
 const doubled =nums.map(num=>{return num*2})   
console.log("Her is the out put "+doubled);
return (<div>
    {doubled.map(num=>(num*2))}
</div>)
}