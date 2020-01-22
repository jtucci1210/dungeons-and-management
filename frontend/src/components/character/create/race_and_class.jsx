import React from 'react';
import '../../../stylesheet/race_and_class.css';
import DropDown from '../../dropdown';
import {raceBlurb, subraceBlurb} from '../../../util/blurb_util';
import {fullRace} from '../../../util/race_util';
import { abilityScores } from '../../../util/skill_util';

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
            finalRace: this.props.fullRace
        }  
        this.handleRaceClick = this.handleRaceClick.bind(this) 
        this.handleSubRaceClick = this.handleSubRaceClick.bind(this) 
    }

    handleRaceClick(id) {
        this.setState(
            {
                race: this.state.races[id].title,
                subrace: "",
                raceSelected: true
            }
        )

    }

    handleSubRaceClick(id) {
        this.setState(
            {
                subrace: this.state.subraces[this.state.race][id].title,
                subraceSelected: true
            }
        )
    }


    render() {

        let rblurb = this.state.race ? raceBlurb[this.state.race] : ""

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
                                    {
                                       raceSubCombo || raceNoSub
                                       ?
                                        Object.keys(raceObject.abilityScores).map ( (ability,idx) =>
                                            <div key={idx} className="race-abilities">
                                                <div className="race-ability-name">{ability}</div>
                                                <div>{raceObject.abilityScores[ability]}</div>
                                            </div>
                                        )
                                        
                                        :
                                        ""
                                    }
                            <div>
                                {}
                            </div>
                            {/* speed
                            skill proficiences */}
                        </div>
                    </div>
                    <div className="class-container">
                        <h1>Class</h1>
                        <div className="class-selector">
                     
                        </div>
                    </div>
                </div>
                <div className="final-stats-container">
                    
                </div>
            </div>
        )
    }
}

export default RaceAndClass;
