import React from 'react';
import StatRoller from './stat_roller';
import RaceAndClass from './race_and_class';
import '../../../stylesheet/character_create_form.css';
import { fullRace } from '../../../util/race_util';
import { fullClass } from '../../../util/class_util';


class CharacterCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props}
        this.updateState = this.updateState.bind(this)
        this.updateFinalStats = this.updateFinalStats.bind(this)
    }

    updateState(slice) {
        this.setState(slice)
    }


    updateFinalStats(finalRace) {
        let allBonusAbilities = Object.keys(fullRace[finalRace].abilityScores)
        let temp = this.state.abilities
        Object.values(this.state.abilities).forEach( ability =>
           {
               if (allBonusAbilities.includes(ability.title)) {
                    ability.value = parseInt(ability.value) + parseInt(this.props.fullRace[finalRace].abilityScores[ability.title])
                
            }
        }

        )

        this.setState({
            abilities: temp
        })

    }

    renderFinalStats() {

        // this.updateFinalStats(finalRace)

       return Object.values(this.state.abilities).map((ability, idx) =>
            <div className="final-stat-box" key={idx}>
                <h1>{ability.title}</h1>
                <div>{ability.value}</div>
            </div>
        )
    }

    render() {

        return (
            <div className="character-create-form-container">
                <div className="character-name">
                    <input type="text" placeholder="character name"/>
                </div>
                <div className="stat-roller-component">
                    <StatRoller 
                        abilities = {this.props.abilities}
                        rolls = {this.props.rolls}
                        order = {this.props.order}
                        statsRolled = {this.props.statsRolled}
                        updateState={this.updateState}
                    />
                </div>
                <div className="race-and-class-component">
                    {
                        this.state.statsRolled
                        ?
                        <div className="race-and-class-box">
                            <RaceAndClass 
                                raceSelected={this.props.raceSelected}
                                classSelected={this.props.classSelected}
                                subraceSelected={this.props.subraceSelected}
                                races={this.props.races}
                                subraces={this.props.subraces}
                                race={this.props.race}
                                class={this.props.class}
                                fullRace={this.props.fullRace}
                                classes={this.props.classes}
                                updateState={this.updateState}
                                abilities={this.props.abilities}
                                updateFinalStats={this.updateFinalStats}

                            />
                            <div className="final-stats-container">
                                <h1>Final Stats</h1>
                                <div className="stats-list">
                                    {
                                      
                                        this.renderFinalStats()
                                       
                                    }
                                </div>
                            </div>
                        </div>
                            :
                        ""
                    }
                </div>
            </div>
        )
    }
}

export default CharacterCreateForm;
