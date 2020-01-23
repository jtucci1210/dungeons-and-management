import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash_page';
import Modal from './modal/modal';
import HomePage from './homepage/homepage_container';
import CharacterShowContainer from './character/show/character_show_container';
import CampaignContainer from './campaign/campaign_container';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <ProtectedRoute exact path='/home' component={HomePage} />
            <ProtectedRoute exact path="/characters/:characterId" component={CharacterShowContainer} />
            <ProtectedRoute exact path="/campaign" component={CampaignContainer} />
        </Switch>
        {/* <FooterBarContainer/> */}
        
    </div>
);

export default App;