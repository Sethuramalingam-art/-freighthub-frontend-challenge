import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import shippmentReducer from './reducer/index'
import * as serviceWorker from './serviceWorker';

const store = createStore(shippmentReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store = {store}><App/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
