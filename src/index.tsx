import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {splitIntoWords} from "./01-hello-tests/01";
import {student} from "./02/02";

const sentense = 'Hello my friends!';
const result = splitIntoWords(sentense);

// console.log(result[0] === 'hello');
// console.log(result[1] === 'my');
// console.log(result[2] === 'friend');

// console.log(student)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
