import React from 'react';
import * as diceUtil from '../../../util/dice_util';
import { abilityScores } from '../../../util/skill_util';

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
            <div>
                {
                    abilityScores.map( (ability, idx) => (
                        <div key={idx}>
                            <h1>{ability}</h1>
                            <div>
                                <i className="fas fa-dice-six"></i>
                            </div>
                            <div>
                                {this.state[ability]}
                            </div>
                        </div>
                    ))
                }
                <button onClick={this.rollStats}>Generate</button>
            </div>
        )

    }
}

export default StatRoller;