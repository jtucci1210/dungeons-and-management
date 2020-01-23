
import React from 'react';
import '../../stylesheet/splash.scss'
import splashImg from './splash_image.jpg'

class Splash extends React.Component {
    render() {
        return (
          <div>
            <div className="main-page-background-img">
              <img src={splashImg} alt="background" className="splash-image" />
              <div className="content">
                <div className="splash-description">
                <h1 className="header-splash-description">What are we?</h1>
                  <p className="splash-description-paragraph">
                    I'm the decription of the app
                  </p>
                </div>
                <div className="splash-character-build">
                  <img className="splash-character-build-img"></img>
                  <p className="splash-character-build-paragraph">
                    I'm the description of the character building feature
                  </p>
                </div>
                <div className="splash-campaign-management">
                  <p className="splash-campaign-management-paragraph">
                    I'm the description of the campaign management feature
                  </p>
                  <img className="splash-campaign-management-img"></img>
                </div>
                <div className="splash-dice-manager">
                  <img className="splash-dice-manager-img"></img>
                  <p className="splash-dice-manager-paragraph">
                    I'm the description of the dice manager feature
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;