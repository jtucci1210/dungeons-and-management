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
            rolls: this.props.rolls,
            order: this.props.order,
            statsRolled: false
        }
        this.rollStats = this.rollStats.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    rollStats() {
        let rolls = [diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat(), diceUtil.dStat()]
        
        this.setState(
            {
                rolls: rolls,
                statsRolled: true
            }
        )
    }

    handleClick(id, ability) {
        let temp = this.state.abilities
        temp[id].selected = !temp[id].selected
        temp[id].value = this.state.rolls[ability]
        let temp2 = this.state.order
        let jdx = this.state.order.indexOf(temp[id].title)
        if ( jdx !== -1 ) {
            temp2[jdx] = ""
            temp[id].selected = !temp[id].selected
        }
        temp2[ability] = temp[id].title
        this.setState({
            abilities: temp,
            roll: temp2
        })
    }

    render() {

        let list = Object.values(this.state.abilities)
       
        return (
            <div className="stat-roller-container">
                <div className="stat-roller-boxes">
                    {
                        this.state.order.map( (ele, idx) => (
                            <div className="ability-box" key={idx}>
                                <h1 className="ability-name">{ele}</h1>

                                <div className="dice">
                                    <i className="fas fa-dice-six"></i>
                                </div>
                                <div className="stat-roll">
                                    {this.state.rolls[idx]}
                                </div>
                                {this.state.statsRolled
                                    ?
                                    <DropDown
                                        className="drop-down"
                                        title="Select Ability"
                                        list={list}
                                        handleClick={this.handleClick}
                                        ability={idx}
                                    />
                                    :
                                    <div></div>   
                            }
                            </div>
                        ))
                    }
               
                </div>
            {this.state.statsRolled
                ?
                <div></div>
                :
                <button className="generate-button" onClick={this.rollStats}>Generate</button>
            }
            
            </div>
        )

    }
}

export default StatRoller;