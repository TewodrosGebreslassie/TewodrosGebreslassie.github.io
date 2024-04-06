import React, { useState, ChangeEvent } from 'react';

function App() {
  const [age,setAge]=useState(0);
  const handeleAge=(e:ChangeEvent<HTMLInputElement>)=>{
    setAge(parseInt(e.target.value))
  }
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleClick = () => {
    if (username === "teddy" && password === "123") {
      console.log('success');
    }
    else{
      console.log('faild');
    }
  }

  return (
    <div>
      User
      <input value={username} onChange={handleChangeUsername} />
      Password
      <input type="password" value={password} onChange={handlePassword} />
      <button onClick={handleClick}>Click me</button>
      <input value={age} onChange={handeleAge}/>
    </div>
  );
}

export default App;