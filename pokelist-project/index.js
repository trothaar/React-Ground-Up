import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let baseURL = 'http://pokeapi.salestock.net/api/v2';

ReactDOM.render(<App baseURL ={baseURL} />, document.getElementById('root'));
registerServiceWorker();
