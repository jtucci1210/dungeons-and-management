import React from 'react';
import * as diceUtil from '../../../util/dice_util';
import { abilityScores } from '../../../util/skill_util';
import '../../../stylesheet/stat_roller.css';

class StatRoller extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.abilities
        this.rollStats = this.rollStats.bind(this)
    }

    rollStats() {
        this.setState(
            {
                strength: diceUtil.dStat(),
                dexterity: diceUtil.dStat(),
                constitution: diceUtil.dStat(),
                intelligence: diceUtil.dStat(),
                wisdom: diceUtil.dStat(),
                charisma: diceUtil.dStat()
            }
        )
    }

    render() {

        return (
            <div className="stat-roller-container">
                <div className="stat-roller-boxes">
                    {
                        abilityScores.map( (ability, idx) => (
                            <div className="ability-box" key={idx}>
                                <h1 className="ability-name">{ability}</h1>
                                <div>
                                    <i className="fas fa-dice-six"></i>
                                </div>
                                <div>
                                    {this.state[ability]}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="generate-button" onClick={this.rollStats}>Generate</button>
            </div>
        )

    }
}

export default StatRoller;