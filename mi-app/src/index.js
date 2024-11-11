import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
   );

// En el ejemplo que se muestra a continuacion se esta usando propiedades como:
// propiedad 'children' y la porpiedades custom que en el caso de este ejemplo es: 'estado'
// const Li = ({children,sts, casa, edad }) =>
//   <li>{children} se encuentra {sts}</li>

// const X = () =>
//   <ul>
//     <Li 
//       children = {'children'}
//       sts = {'feliz'}
//       casa = {false}
//       edad = {24}
//     >
//       Lalo
//     </Li>

//     <Li
//       sts = {'triste'}
//     >Alex
//     </Li>

//     <Li
//       sts = {'emocionada'}>Mariana</Li>
//   </ul>

//ReactDOM.render: se encarga de renderizar nuestras aplicaciones en React, puede recibir
//un string o jsx
//jsx: es azucar sintaxyca para no tener que utilizar "React.createElement()"
// ReactDOM.render(
//   <X/>, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
