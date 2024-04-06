import React, { ChangeEvent, FormEvent, useState } from 'react';

import './App.css';

interface FormData {
  username: string;
  password: string;
  }
  function App() {
  const [formState, setFormState] = useState<FormData>({username: '', password: ''});
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target;
  setFormState({...formState, [name]: value});
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formState);
  }
  return (
  <form onSubmit={handleSubmit}>
  Username: <input name="username" value={formState.username} onChange={handleInputChange}/>
  Password: <input name="password" value={formState.password} onChange={handleInputChange}/>
  <button>Login</button>
  </form>
  )
  }
  export default App;