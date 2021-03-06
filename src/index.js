import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/main.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {history} from "./helpers/history";
import {App} from "./App";

const meta = {
    title: 'Some Meta Title'
};

ReactDOM.render(
    <BrowserRouter history={history}>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
