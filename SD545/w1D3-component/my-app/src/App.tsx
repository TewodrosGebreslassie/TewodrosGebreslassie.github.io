import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const clickHandler = (name: string, e: React.SyntheticEvent<EventTarget>):void => {
  console.log('Button is clicked!!!', name);
  }
  return (
  <button onClick={(e) => clickHandler('MIU', e)}>Click Me</button>
  );
  }

export default App;
