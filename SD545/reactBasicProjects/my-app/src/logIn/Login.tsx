import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

export default function LogIn(){
    const [userInput, setUserInpu]= useState('')
    const [password,setPassword]=useState('')

    const inpuRef=useRef<HTMLInputElement>(null);
    const passRef= useRef<HTMLInputElement>(null);

    const handler=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target
  if(name==='username'){
        setUserInpu(e.currentTarget.value)
  }
    else if(name==='userPasword'){
          setPassword(e.currentTarget.value)
    }
      
    }
    const handleSubmit = () => {
        // You can handle login logic here
        console.log("Username:", userInput);
        console.log("Password:", password);
    }

    return(<div>

        <h1>Log in </h1>
        <input name="username" ref={inpuRef} type="text"  placeholder="please enter your user name" onChange={handler} />
        password
        <input name="userPasword" ref={passRef} type="password" placeholder="enter your password" onChange={handler}/>
<button onClick={handleSubmit}>LogIn</button>
    </div>)
}