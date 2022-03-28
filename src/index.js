import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MindNodes from './Nodes/addNode';


ReactDOM.render(
  <React.StrictMode>
    <div style={{width: '1000px',height: '900px'}}>
    <App />
    <div style={{borderBottom: '3px solid blue'}}/>
    <MindNodes/>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
