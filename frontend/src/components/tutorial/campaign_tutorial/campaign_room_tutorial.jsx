import React from 'react';
import campaignMenuImg from './1-campaign-menu.png';
import campaignRoomNumberImg from './2-campaign-room-number.png';
import joinCampaignImg from './3-join-campaign.png';
import playerCampaignRoomImg from './4-player-campaign-room.png';
import characterHealthImg from './5-character-health.png';
import diceRollerImg from './6-dice-roller.png';
import rollPercentileImg from './7-roll-percentile.png';
import otherPlayerDiceRollImg from './8-other-player-dice-roll.png';
import characterShowImg from './9-character-show.png';

import '../../../stylesheet/tutorial.css';
import { Link } from "react-router-dom";


class CampaignTutorial extends React.Component {

    render() {
        return (
            <div className="tutorial-container">
                <div className="tutorial-link-div">
                    <Link to="/tutorial/createcharacter" className="tutorial-link">Create Character Tutorial</Link>
                </div>
                <h1 className="tutorial-header">Campaign Room Tutorial</h1>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Create New Character</strong>
                        <br />
                        <br />
                        On the homepage, click on the plus box.
                        <br />
                        <br />
                        It will turn dark green on hover.
                    </p>
                    <img
                        src={campaignMenuImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description" id="createCharacter">
                        <strong>Generate Dice Rolls</strong>
                        <br />
                        <br />
                        Click on the generate button to generate your dice rolls.
                    </p>
                    <img
                        src={campaignRoomNumberImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Select Ability Scores</strong>
                        <br />
                        <br />
                        Next you will be able to select which ability score you want associated with each roll.
                        <br />
                        <br />
                        You can hover over the '?' icon for more information about each ability.
                    </p>
                    <img
                        src={joinCampaignImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Ability Scores Cont'd</strong>
                        <br />
                        <br />
                        Make sure you have associated each roll with an ability score.
                        <br />
                        <br />
                        You cannot have duplicates.
                    </p>
                    <img
                        src={playerCampaignRoomImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Name Your Character</strong>
                        <br />
                        <br />
                        Don't forget to choose a name for your character!
                    </p>
                    <img
                        src={characterHealthImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Choose Your Character's Race</strong>
                        <br />
                        <br />
                        Select a race from the dropdown.
                        <br />
                        <br />
                        Once selected, you will be able to see a description of the race.
                        <br />
                        <br />
                        You will also see any bonuses your race selection has in the white box below.
                    </p>
                    <img
                        src={diceRollerImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Choose Your Character's Subrace</strong>
                        <br />
                        <br />
                        *Not every Race has an associated Subrace. If it does, a dropdown will appear for you to select a Subrace.
                        <br />
                        <br />
                        Select a subrace from the dropdown.
                        <br />
                        <br />
                        Once selected, you will be able to see a description of the subrace.
                        <br />
                        <br />
                        You will also see any bonuses your subrace selection has in the white box below.
                    </p>
                    <img
                        src={rollPercentileImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Choose Your Character's Class</strong>
                        <br />
                        <br />
                        Select a class from the dropdown.
                        <br />
                        <br />
                        Once selected, you will be able to see a description of the class.
                        <br />
                        <br />
                        You will also see any bonuses your class selection has in the white box below.
                    </p>
                    <img
                        src={otherPlayerDiceRollImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Finalize Race and Class Selection</strong>
                        <br />
                        <br />
                        Tip: As you are trying to decide which Race and Class to choose, think about what kind of character you want to play - Tank, Healer, Magic User, etc.
                        <br />
                        <br />
                        Choose the combination that best compliments this.
                    </p>
                    <img
                        src={characterShowImg}
                        alt=""
                        className="tutorial-img" />
                </div>
            </div>
        )
    }

};

export default CampaignTutorial;