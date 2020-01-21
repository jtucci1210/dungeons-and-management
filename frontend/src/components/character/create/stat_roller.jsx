import React from 'react';
import * as diceUtil from '../../../util/dice_util';
import { abilityScores } from '../../../util/skill_util';
import '../../../stylesheet/stat_roller.css';
import DropDown from '../../dropdown';

class StatRoller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            abilities: this.props.abilities,
            rolls: this.props.rolls
        }
        this.rollStats = this.rollStats.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    rollStats() {
        let rolls = [diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat()]
        
        this.setState(
            {
                rolls: rolls
            }
        )
        // debugger
    }

    handleClick(id, ability) {
        let temp = this.state.abilities
        temp[id].selected = !temp[id].selected
        temp[id].value = this.state.rolls[ability]
        this.setState({
            abilities: temp
        })
        // debugger
    }

    render() {

        let list = Object.values(this.state.abilities)
        //     .filter( (ability) => 
        //     ability.selected === false
        // )

        return (
            <div className="stat-roller-container">
                <div className="stat-roller-boxes">
                    {
                        [1,2,3,4,5,6].map( (ele, idx) => (
                            <div className="ability-box" key={idx}>
                                <h1 className="ability-name">Ability {idx+1}</h1>

                                <div>
                                    <i className="fas fa-dice-six"></i>
                                </div>
                                <div>
                                    {this.state.rolls[idx]}
                                </div>
                                <DropDown 
                                    title="Select Ability"
                                    list={list}
                                    handleClick={this.handleClick}
                                    ability={idx}
                                />
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