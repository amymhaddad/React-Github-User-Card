import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let myStorage = window.localStorage;

ReactDOM.render(<App 
    localStorage = {myStorage}
    />, document.getElementById('root'));