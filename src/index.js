import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*

import { createStore } from "redux";





const list = document.querySelectorAll('.list')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const addTrackBtn = document.querySelectorAll('.addTrack')[0];

store.subscribe(() => {
    console.log('subscribe', store.getState());
    list.innerHTML = '';
    trackInput.value = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
});

store.dispatch({ type: 'ADD_TRACK', payload: 'Shalenii'});
store.dispatch({ type: 'ADD_TRACK', payload: 'Nebo'});



addTrackBtn.addEventListener('click', () => {
    store.dispatch({ type: 'ADD_TRACK', payload: trackInput.value});
});*/
