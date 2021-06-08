import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div clasName="title">
      <h1>Calculadora</h1>
    </div>
    <Calculator />

    <div clasName="title">
      <h4>Caio Puls Garcia</h4>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
