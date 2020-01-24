import "./fonts/BirminghamBold.ttf";
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { logout } from './actions/session_actions';
import { setAuthToken } from './util/session_api_util';
import axios from 'axios';
import { getCharacter } from "./util/character_util";



document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;
        if (decodedUser.exp < currentTime) {           
            store.dispatch(logout());
            window.location.href = '/';
        }
    } else {
        store = configureStore({});
    }   
     const root = document.getElementById('root');
    // window.getState = store.getState();
    // window.axios = axios;
    // window.getCharacter = getCharacter;
    ReactDOM.render(<Root store={store} />, root);
});