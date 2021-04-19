import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from '../../App';
import * as serviceWorker from '../../serviceWorker';

const name = 'lucifer';
const element = <h1>Hello, {name}!</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);