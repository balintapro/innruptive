import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-176835961-1');

  // Console Hi from Innruptive
  const green = [
    'background: #000'
    , 'color: springgreen'
    , 'display: inline-block'
    , 'font-weight: bold'
  ].join(';');

  const white = [
    'background: #000'
    , 'color: white'
    , 'display: inline-block'
    , 'font-weight: bold'
  ].join(';');

  console.log('%c INNRUPTIVE', green);
  console.log('%c Front-end solutions made with care and speed.', white);
  console.log('%c Balint Apro - balint@innruptive.com', green);

ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
