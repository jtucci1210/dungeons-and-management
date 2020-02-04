import React from 'react';
import '../../stylesheet/tutorial.css';
import characterIndexImg from './1-character-index.png';
import selectCharacterCreateImg from './2-select-character-create.png';
import generateDiceRollsImg from './3-generate-dice-rolls.png';
import rollsGeneratedImg from './4-rolls-generated.png';
import abilityScoresTooltipImg from './5-ability-scores-tooltip.png';
import selectAbilityScores from './6-select-ability-scores.png';
import dontForgetCharName from './7-dont-forget-char-name.png';
import raceAndClassSelectionSection from './8-race-and-class-selection-section.png';
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
                    <p className="tutorial-step-description">I am description of step 1</p>
                        <img 
                        src={characterIndexImg} 
                        alt=""
                        className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 2</p>
                    <img 
                        src={selectCharacterCreateImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 3</p>
                    <img 
                        src={generateDiceRollsImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 4</p>
                    <img 
                        src={rollsGeneratedImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 5</p>
                    <img 
                        src={abilityScoresTooltipImg}
                    alt=""
                    className="tutorial-img"/>
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">I am description of step 6</p>
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
                    <p className="tutorial-step-description">I am description of step 8</p>
                    <img 
                        src={raceAndClassSelectionSection}
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