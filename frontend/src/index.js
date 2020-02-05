import "./fonts/BirminghamBold.ttf";
import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import axios from 'axios';



document.addEventListener('DOMContentLoaded', () => {
        let store;
        if (localStorage.jwtToken) {
                setAuthToken(localStorage.jwtToken);
                const decodedUser = jwt_decode(localStorage.jwtToken);
                const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
                store = configureStore(preloadedState);

                const currentTime = Date.now() / 1000;
                if (decodedUser.exp < currentTime) {                     
                        // store.dispatch(logout()); //Disable during development
                        // window.location.href = '/';
                }
        } else {
                store = configureStore({});
        }     
         const root = document.getElementById('root');
         ReactDOM.render(<Root store={store} />, root);
         
        //For Testing
        window.getState = store.getState();
        window.axios = axios
});