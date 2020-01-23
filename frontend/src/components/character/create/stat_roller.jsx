import React from 'react';
import * as diceUtil from '../../../util/dice_util';
import '../../../stylesheet/stat_roller.css';
import DropDown from '../../dropdown';
import {abilityBlurb} from '../../../util/blurb_util';

class StatRoller extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            abilities: this.props.abilities,
            rolls: this.props.rolls,
            order: this.props.order,
            statsRolled: this.props.statsRolled
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
        this.props.updateState({
                rolls: rolls,
                statsRolled: true
            })
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
        this.props.updateState(
            {
                abilities: temp,
                roll: temp2
            }
        )
    }

    render() {
        
        let blurb = (
            <div className="skill-blurb-box">
                <span><b>Strength:</b> {abilityBlurb.strength}</span>
                <span><b>Dexterity:</b> {abilityBlurb.dexterity}</span>
                <span><b>Constitution:</b> {abilityBlurb.constitution}</span>
                <span><b>Intelligence:</b> {abilityBlurb.intelligence}</span>
                <span><b>Wisdom: </b> {abilityBlurb.wisdom}</span>
                <span><b>Charisma:</b> {abilityBlurb.charisma}</span>
            </div>
        )

        let list = Object.values(this.state.abilities)
       
        return (
            <div className="stat-roller-container">
                <div className="stat-roller-boxes">
                    {
                        this.state.order.map( (ele, idx) => (
                            <div className="ability-box" key={idx}>
                                <h1 className="ability-name">{ele}</h1>

                                <div className="dice">
                                    <i className={this.state.statsRolled ? "fas fa-dice-six" : "fas fa-dice-six fa-spin"}></i> 
                                </div>
                                <div className="stat-roll">
                                    {this.state.rolls[idx]}
                                </div>
                                {this.state.statsRolled
                                    ?
                                    <DropDown
                                        className="stat-drop-down"
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
                <div>
                    <i className="fas fa-question-circle info"></i>
                    <div className="skill-blurb">{blurb}</div>
                </div>
                :
                <button className="generate-button" onClick={this.rollStats}>Generate</button>
            }
            
            </div>
        )

    }
}

export default StatRoller;