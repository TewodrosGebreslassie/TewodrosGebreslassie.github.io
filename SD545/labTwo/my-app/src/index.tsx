import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Counter, RandomNumGenerator, TempConverter } from './app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>   <Counter />,
    <TempConverter/>,
    <RandomNumGenerator/>
  </>
 
);


reportWebVitals();
