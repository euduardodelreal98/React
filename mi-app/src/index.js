import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>
//   );

const Li = ({ children }) => <li>{children}</li>
const X = () =>
  <ul>
    <Li>Lalo</Li>
    <li>Alex</li>
    <li>Ericka</li>
  </ul>
//ReactDOM.render: se encarga de renderizar nuestras aplicaciones en React, puede recibir
//un string o jsx
//jsx: es azucar sintaxyca para no tener que utilizar "React.createElement()"
ReactDOM.render(
  <X/>, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
