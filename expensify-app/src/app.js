import React from 'react';
import ReactDOM from 'react-dom';
import Approuter from './routers/app-router';
import 'normalize.css/normalize.css'; // wont work bc we are just using scss, need to update webpack.config.js
import './styles/styles.scss';

ReactDOM.render(<Approuter />, document.getElementById('app'));