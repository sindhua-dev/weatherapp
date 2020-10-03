import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoreClass from './Weather';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CoreClass />
  </React.StrictMode>,
  document.getElementById('own app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
