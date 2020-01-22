import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Modal from './modal/modal';
import HomePage from './homepage/homepage_container';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <ProtectedRoute exact path='/home' component={HomePage} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
        {/* <FooterBarContainer/> */}
        
    </div>
);

export default App;