import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/app-router';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));