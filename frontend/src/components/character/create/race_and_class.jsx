import React from 'react';
import '../../../stylesheet/race_and_class.css';
import DropDown from '../../dropdown';
import {raceBlurb, subraceBlurb, classBlurb} from '../../../util/blurb_util';
import {fullRace} from '../../../util/race_util';
import {fullClass} from '../../../util/class_util';

class RaceAndClass extends React.Component {
    constructor(props) {
        super(props)  
        this.state = {
            races: this.props.races,
            race: this.props.race,
            subrace: this.props.subrace,
            class: this.props.class,
            subraces: this.props.subraces,
            raceSelected: this.props.raceSelected,
            classSelected: this.props.classSelected,
            finalRace: this.props.finalRace,
            classes: this.props.classes,
            statsRolled: this.props.statsRolled
        }  
        this.handleRaceClick = this.handleRaceClick.bind(this) 
        this.handleSubRaceClick = this.handleSubRaceClick.bind(this) 
        this.handleClassClick = this.handleClassClick.bind(this)
    }

    handleRaceClick(id) {
       
        let chosenRace = this.state.races[id].title

        let subs = this.props.subraces[chosenRace]

        let hasSubs = !!subs

        this.setState(
            {
                race: this.state.races[id].title,
                subrace: "",
                raceSelected: true,
                subraceSelected: false
            }
        )

        this.props.updateState(
            {
                race: this.state.races[id].title,
                subrace: "",
                raceSelected: true,
                subraceSelected: false,
                finalRace: chosenRace,
                hasSubraces: hasSubs
            }
        )

        if (!subs) {
            this.props.updateFinalStats(chosenRace)
        }

    }

    handleSubRaceClick(id) {
        let chosenRace = `${this.state.subraces[this.state.race][id].title}${this.state.race[0].toUpperCase()}${this.state.race.substring(1)}`

        this.setState(
            {
                subrace: this.state.subraces[this.state.race][id].title,
                subraceSelected: true
            }
        )
 
        this.props.updateState(
            {
                subrace: this.state.subraces[this.state.race][id].title,
                subraceSelected: true,
                finalRace: chosenRace
            }
        )

        this.props.updateFinalStats(chosenRace)

    }

    handleClassClick(id) {

        this.setState(
            {
                class: this.state.classes[id].title,
                classSelected: true
            }
        )

        this.props.updateState(
            {
                class: this.state.classes[id].title,
                classSelected: true,
                numSkills: fullClass[this.state.classes[id].title].numSkills
            }
        )
    }

    renderSkills(raceObject) {
        if (raceObject && raceObject.skillProficiencies) {
            return raceObject.skillProficiencies.map( (skill, idx) => 
                <div key={idx}>Skill Proficiencies: 
                    <li>{skill}</li>
                </div>
                )
        } else {
            return null
        }
    }

    renderClassSkills() {
        if (this.state.classSelected) {
            return (
                <div className="class-skill-list-box">Choice of {fullClass[this.state.class].numSkills} skills (to be selected in next section): 
                    <div className="class-skill-list">
                    {fullClass[this.state.class].skillList.map( (skill, idx) =>
                        <li key={idx} className="class-skill">{skill}</li>
                        )}
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    renderSavingThrows() {
        if (this.state.classSelected) {
            return (
                <div className="saving-throw-box">Saving Throws: 
                    {fullClass[this.state.class].savingThrows.map((skill, idx) =>
                    <li className="saving-throw" key={idx}>{idx === 0 ? `${skill},` : skill}</li>
                )}
                </div>
            )
        } else {
            return null
        }
    }
    
    render() {
        
        let rblurb = this.state.race ? raceBlurb[this.state.race] : ""
        
        let cblurb = this.state.class ? classBlurb[this.state.class] : ""

        let srblurb = this.state.subrace ? subraceBlurb[this.state.subrace] : ""

        let subs = this.state.race ? this.state.subraces[this.state.race] : null

        let raceSubCombo = this.state.raceSelected && this.state.subraceSelected ? `${this.state.subrace}${this.state.race[0].toUpperCase()}${this.state.race.substring(1)}` : null

        let raceNoSub = this.state.raceSelected && !subs ? `${this.state.race}` : null

        let raceObject = subs ? fullRace[raceSubCombo] : fullRace[raceNoSub]

        return (
            <div className="race-and-class-container">
                <div className="race-and-class">
                    <div className="race-container">
                        <h1>Race</h1>
                        <div className="race-selector">
                            <div>
                                <DropDown 
                                    title="Select Race"
                                    list={this.state.races}
                                    className="race-drop-down"
                                    handleClick={this.handleRaceClick}
                                />
                            </div>
                            <h3>{this.state.race}</h3>
                        </div>
                        <div className="race-blurb">{rblurb}</div>
                        <div className="subrace-selector">
                            {
                                subs
                                    ?
                                    <div>
                                        <DropDown
                                            title="Select Subrace"
                                            list={subs}
                                            className="subrace-drop-down"
                                            handleClick={this.handleSubRaceClick}
                                        />
                                    </div>
                                    :
                                    <div></div>
                            }
                            <h3>{this.state.subrace}</h3>
                        </div>
                        <div className="subrace-blurb">{srblurb}</div>
                        <div className="racial-modifiers">
                                <div className="modifiers">
                                    {
                                       raceSubCombo || raceNoSub
                                       ?
                                        Object.keys(raceObject.abilityScores).map ( (ability,idx) =>
                                            <div key={idx} className="race-abilities">
                                                <div className="race-ability-name">{ability}</div>
                                                <div className="race-ability-mod">+ {raceObject.abilityScores[ability]}</div>
                                            </div>
                                        )
                                        
                                        :
                                        ""
                                    }
                                </div>
                            <div className="speed-and-proficiencies">
                                <div className="speed">{raceObject ? `Speed: ${raceObject.speed}` : ""}</div>
                                <div className="skills">{this.renderSkills(raceObject)}</div>
                                <div className="misc-halfelf">{this.state.race === "halfelf" ? "Misc: gain +1 to two ability scores and gain proficiency bonus for two skills (to be selected in next section)" : ""}</div>
                            </div>
                        </div>
                    </div>
                    <div className="class-container">
                        <h1>Class</h1>
                        <div className="class-selector">
                            <div className="class-drop-down-box">
                                <div>
                                    <DropDown
                                        title="Select Class"
                                        list={this.state.classes}
                                        className="class-drop-down"
                                        handleClick={this.handleClassClick}
                                    />
                                </div>
                                <h3>{this.state.class}</h3>
                            </div>
                        </div>
                        <div className="class-blurb">{cblurb}</div>
                        <div className="class-modifiers">
                            <div className="hit-dice">{ this.state.class ? `HitDice: ${fullClass[this.state.class].hitDice}` : ""}</div>
                            <div className="saving-throws">
                                    {this.renderSavingThrows(this.state.class)}
                            </div>
                            <div className="class-skills">
                                <div className="class-skill-list-box">{this.renderClassSkills(this.state.class)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RaceAndClass;
