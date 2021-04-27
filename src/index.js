import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { BrowserRouter as Router } from 'react-router-dom';

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

const detectScreen = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

detectScreen()

window.addEventListener('resize', () => {
  detectScreen()
});

window.addEventListener('orientationchange', () => {
  detectScreen()
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
