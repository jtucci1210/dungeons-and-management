import React from 'react';
import '../../stylesheet/tutorial.css';
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
                        src=""
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
                        src=""
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
                        src=""
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
                        src=""
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
                        src=""
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
                        src=""
                        alt=""
                        className="tutorial-img narrow" />
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
                        src=""
                        alt=""
                        className="tutorial-img narrow" />
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
                        src=""
                        alt=""
                        className="tutorial-img narrow" />
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
                        src=""
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Final Stats</strong>
                        <br />
                        <br />
                        Look over your Final Stats and click Next.
                    </p>
                    <img
                        src=""
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Select Skills</strong>
                        <br />
                        <br />
                        Check the box for the skills you wish to select.
                        <br />
                        <br />
                        The list of skills, as well as how many you are allowed to select, is determined by your Class selection from the previous step.
                    </p>
                    <img
                        src=""
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Create Character</strong>
                        <br />
                        <br />
                        Once you have chosen all your skills, the 'Create Character' button will appear.
                        <br />
                        <br />
                        If you do not have the specified number of skills selected, the button will not show.
                        <br />
                        <br />
                        Click the button to complete your character creation!
                    </p>
                    <img
                        src=""
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Character Show Page</strong>
                        <br />
                        <br />
                        Once your character has been created, you will be navigated to its show page.
                        <br />
                        <br />
                        From here you can make additional edits, or even delete the character if you so choose.
                    </p>
                    <img
                        src=""
                        alt=""
                        className="tutorial-img" />
                </div>
                <div className="tutorial-step">
                    <p className="tutorial-step-description">
                        <strong>Homepage</strong>
                        <br />
                        <br />
                        You will now see your newly created character on your homepage.
                        <br />
                        <br />
                        Go forth and make some characters!
                    </p>
                    <img
                        src=""
                        alt=""
                        className="tutorial-img" />
                </div>
            </div>
        )
    }

};

export default CampaignTutorial;