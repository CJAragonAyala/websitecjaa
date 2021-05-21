import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import QierPlayer from 'qier-player';
import Boton from './components/boton';

ReactDOM.render(
  <div>
    <h1>Soy Carlos</h1>
    <App />
    <Boton />
    <QierPlayer srcOrigin='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
  </div>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
