import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<><App/><MyInfo/>
// </>);
const root=ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<><App/>
</>);
reportWebVitals();
