import React from 'react';

import './App.css';
import MyInfo from './components/MyInfo';
import Main from './components/MainContentComponts';
import CheckBox from './checkBoxComponent/CheckBox';
import Variable from './variable.tsx/variable';
import TodoItem from './TodoItem/TodoItem';

function App() {
  return (<><ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <MyInfo/>
  <Main/>
  <CheckBox/>
  <Variable/>
  <TodoItem/>
  </>)
}

export default App;
