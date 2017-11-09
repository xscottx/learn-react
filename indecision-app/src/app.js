import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));