
import React from 'react';
import '../../stylesheet/splash.scss';
import splashImg from './splash_image.jpg';
import diceImg from './dice.jpg';
import gameFiguresImg from './game_figures.jpg';

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
                    <br/>
                    <br/>
                    Dungeons and Management is a character building and game play aid for the popular role playing game, Dungeons and Dragons.
                  </p>
                </div>
                <div className="splash-character-build">
                  <img
                    src="//:0"
                    alt="img"
                    className="splash-character-build-img"
                  ></img>
                  <p className="splash-character-build-paragraph">
                    <strong>Character Creation</strong>
                    <br/>
                    <br/>
                    Character creation got you confused?
                    <br />
                    <br />
                    We got you covered! 
                    <br />
                    <br />
                    We guide you through the character creation process and alert you to any relevant bonuses!
                  </p>
                </div>
                <div className="splash-campaign-management">
                  <p className="splash-campaign-management-paragraph">
                    <strong>Campaign Management</strong>
                    <br />
                    <br />
                    Tired of trying to keep track of everyone, their health, and their dice rolls?
                    <br />
                    <br />
                    In our campaign rooms, you will have all the info you need at a glance!
                  </p>
                  <img
                    src={gameFiguresImg}
                    alt="img"
                    className="splash-campaign-management-img"
                  ></img>
                </div>
                <div className="splash-dice-manager">
                  <img
                    src={diceImg}
                    alt="img"
                    className="splash-dice-manager-img"
                  ></img>
                  <p className="splash-dice-manager-paragraph">
                    <strong>Dice Manager</strong>
                    <br />
                    <br />
                    Your bag of holding getting a little too heavy? 
                    <br />
                    <br />
                    Fret not!
                    <br />
                    <br />
                    We can roll dice for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Splash;