import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode> StrictMode'a test amaçlı yazdığımız kodlarda ihtiyaç duyacağız.
    <App />
  // </React.StrictMode>
  ,
  document.getElementById('root')  //App componentini roota yerleştir demek
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
