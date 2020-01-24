import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CharacterCreateFormContainer from './character/create/character_create_form_container';
import Modal from './modal/modal';
import HomePage from './homepage/homepage_container';
import CharacterShowContainer from './character/show/character_show_container';
import CampaignContainer from './campaign/campaign_container';
import Footer from './footer/footer';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <ProtectedRoute exact path='/home' component={HomePage} />
            <ProtectedRoute exact path="/characters/new" component={CharacterCreateFormContainer} />
            <ProtectedRoute exact path="/characters/:characterId" component={CharacterShowContainer} />
            <ProtectedRoute exact path="/campaign" component={CampaignContainer} />
        </Switch>
        <Footer/>
        
    </div>
);

export default App;