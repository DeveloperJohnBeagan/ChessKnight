/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//
import '../../css/app.scss';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
//
import App from './components/App';

render(

    <App />,

    document.getElementById('app')
);

