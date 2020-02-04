import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashPage from './splash/splash_page';
import CharacterCreateFormContainer from './character/create/character_create_form_container';
import Modal from './modal/modal';
import HomePage from './homepage/homepage_container';
import CharacterShowContainer from './character/show/character_show_container';
import CampaignContainer from './campaign/campaign_container';
import Footer from './footer/footer';
import CharacterCreateTutorial from './tutorial/create_character_tutorial';
import CampaignTutorial from './tutorial/campaign_room_tutorial';

const App = () => (
    <div>
        <Modal/>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <ProtectedRoute exact path='/home' component={HomePage} />
            <ProtectedRoute exact path="/characters/new" component={CharacterCreateFormContainer} />
            <ProtectedRoute exact path="/characters/:characterId" component={CharacterShowContainer} />
            <ProtectedRoute exact path="/campaigns/:campId" component={CampaignContainer} />
            <ProtectedRoute exact path="/tutorial/createcharacter" component={CharacterCreateTutorial}/>
            <ProtectedRoute exact path="/tutorial/campaign" component={CampaignTutorial}/>
        </Switch>
        <Footer/>
        
    </div>
);

export default App;