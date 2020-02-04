import React from 'react';
import '../../stylesheet/tutorial.css';
import selectCharacterCreateImg from './2-select-character-create.png';
import generateDiceRollsImg from './3-generate-dice-rolls.png';
import abilityScoresTooltipImg from './5-ability-scores-tooltip.png';
import selectAbilityScores from './6-select-ability-scores.png';
import dontForgetCharName from './7-dont-forget-char-name.png';
import selectRace from './9-select-race.png';
import selectSubrace from './10-select-subrace.png';
import selectClass from './11-select-class.png';
import doneWithRaceAndClassSelection from './12-done-with-race-and-class-selection.png';
import finalStatsAndNext from './13-final-stats-and-next.png';
import selectSkills from './14-select-skills.png';
import createCharacter from './15-create-character.png';
import characterShowPage from './16-character-show-page.png';
import characterIndex from './17-character-index.png';

class Tutorial extends React.Component {

    render() {
        return (
            <div className="tutorial-container">
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Create New Character</strong>
                        <br/>
                        <br/>
                        On the homepage, click on the plus box.
                        <br />
                        <br />
                        It will turn dark green on hover.
                    </p>
                    <img 
                        src={selectCharacterCreateImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Generate Dice Rolls</strong>
                        <br/>
                        <br/>
                        Click on the generate button to generate your dice rolls.
                    </p>
                    <img 
                        src={generateDiceRollsImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Select Ability Scores</strong>
                        <br/>
                        <br/>
                        Next you will be able to select which ability score you want associated with each roll.
                        <br/>
                        <br/>
                        You can hover over the '?' icon for more information about each ability.
                    </p>
                    <img 
                        src={abilityScoresTooltipImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Ability Scores Cont'd</strong>
                        <br/>
                        <br/>
                        Make sure you have associated each roll with an ability score.
                        <br/>
                        <br/>
                        You cannot have duplicates.
                    </p>
                    <img 
                        src={selectAbilityScores}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 7</p>
                    <img 
                        src={dontForgetCharName}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 9</p>
                    <img 
                        src={selectRace}
                    alt=""
                    className="tutorial-img narrow"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 10</p>
                    <img 
                        src={selectSubrace}
                    alt=""
                        className="tutorial-img narrow"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 11</p>
                    <img 
                        src={selectClass}
                    alt=""
                        className="tutorial-img narrow"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 12</p>
                    <img 
                        src={doneWithRaceAndClassSelection}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 13</p>
                    <img 
                        src={finalStatsAndNext}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 14</p>
                    <img 
                        src={selectSkills}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 15</p>
                    <img 
                        src={createCharacter}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 16</p>
                    <img 
                        src={characterShowPage}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 17</p>
                    <img 
                        src={characterIndex}
                    alt=""
                    className="tutorial-img"/>
                </div>
            </div>
        )
    }

};

export default Tutorial;