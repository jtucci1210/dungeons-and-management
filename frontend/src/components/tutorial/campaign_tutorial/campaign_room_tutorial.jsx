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
                        <strong>Create a Campaign (For DMs)</strong>
                        <br />
                        <br />
                        On the homepage, click on the 'Create Campaign' button.
                    </p>
                    <img
                        src={campaignMenuImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description" id="createCharacter">
                        <strong>Campaign Room Number (For DMs)</strong>
                        <br />
                        <br />
                        Note the room number for your campaign and send it to your players so they can join.
                    </p>
                    <img
                        src={campaignRoomNumberImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Join a Campaign</strong>
                        <br />
                        <br />
                        On the homepage, in the campaign menu, enter the room number your DM provided.
                        <br />
                        <br />
                        Select the character you wish you join the campaing with, and click 'Join'.
                    </p>
                    <img
                        src={joinCampaignImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Campaign Room</strong>
                        <br />
                        <br />
                        When you arrive in the campaign room, you will see all of the other players who have also joined.
                    </p>
                    <img
                        src={playerCampaignRoomImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Update Character Health</strong>
                        <br />
                        <br />
                        During the campaign, you can increase your decrease your character's HP with the respective buttons.
                        <br/>
                        <br/>
                        Don't forget to click save after adjusting their health!
                        <br/>
                        <br/>
                        *Note: Once you click saveHP, your character's health will be udpated for the rest of the players in the campaign room to see.
                    </p>
                    <img
                        src={characterHealthImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Dice Roller</strong>
                        <br />
                        <br />
                        Enter in the amount of dice you wish to roll under the corresponding dice type.
                        <br />
                        <br />
                        You can roll multiple dice of various types at one time.
                        <br />
                        <br />
                        Click 'Roll Dice' to roll and 'Clear Roll' to clear your last roll.
                    </p>
                    <img
                        src={diceRollerImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Percentile Die</strong>
                        <br />
                        <br />
                        If you need to roll a percentile die, click the 'Roll %' button.
                    </p>
                    <img
                        src={rollPercentileImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Real Time Player Stats</strong>
                        <br />
                        <br />
                        As other players roll dice, you will see the results listed on their character card in real time.
                        <br />
                        <br />
                        You can also see any updates to current health.
                        <br/>
                        <br/>
                        *If the current health of a player is 30% or less than their max, their health will be red.
                    </p>
                    <img
                        src={otherPlayerDiceRollImg}
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Character Info</strong>
                        <br />
                        <br />
                        If you scroll down in the Campaign room, you will see the full info for your Character.
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