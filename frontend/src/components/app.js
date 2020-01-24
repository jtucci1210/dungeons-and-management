import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash_page';
import Modal from './modal/modal';
import HomePage from './homepage/homepage_container';
import CampaignContainer from './campaign/campaign_container'
import Footer from './footer/footer';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <ProtectedRoute exact path='/home' component={HomePage} />
            <ProtectedRoute exact path="/campaign" component={CampaignContainer} />
            {/* {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
        </Switch>
        <Footer/>
        
    </div>
);

export default App;