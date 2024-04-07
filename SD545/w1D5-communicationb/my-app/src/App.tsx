import React, { useState } from 'react';
import './App.css';
import Son, { SonTwo } from './parent_to-Child/ParentToChild';
import ChildOne from './passDtData/ParentTochildData';

import ChildMassage from './chi/ChildToParent';

export default function App(){
//get data from child
const [appTitle, setAppTitle]=useState('')
const getTitle=(titl:string)=>{
  console.log("get massage from child");
}


getTitle(appTitle)

  const [message, setMassage]=useState('This is from parent!');
  const [count, setCount]= useState(0);

  const handleCount=()=>{  setCount(count+1)
  }


  // const handlemassage=()=>{
  //   setMassage(message)
  // }

  return (<div className='App'>

    {/* sneding data to child and coutn */}
  <Son msg={message} count={count}  /><button onClick={handleCount}>Like</button>
<button onClick={()=>setCount(count-1)}>unlike</button>


  {/* sneding d/t data to child */}
  <ChildOne age={20} name='Teddy'  isLoggedIn={false} fruits={['banana','orange', 'apple']}
      callBack={()=>console.log('call back passed to son from App')} person={{fName:'tedy',lName:'geddya'}} 
      child={<span>This is a span child</span>}/>



<div>
<SonTwo children={<span>Hi, See you on monday</span>} />
</div>
<p><p></p></p><p><p></p></p> <p><p></p></p>
{/* this is from chiled to the parent or from medule to the app */}
{appTitle}
<ChildMassage getTitle={getTitle}/>
this is the title {appTitle}
  </div>)
}