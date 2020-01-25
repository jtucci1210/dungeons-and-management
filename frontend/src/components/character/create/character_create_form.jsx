import React from 'react';
import StatRoller from './stat_roller';
import RaceAndClass from './race_and_class';
import '../../../stylesheet/character_create_form.css';
import { fullRace } from '../../../util/race_util';
import { fullClass } from '../../../util/class_util';
import { strengthSkills, dexteritySkills, intelligenceSkills, wisdomSkills, charismaSkills } from '../../../util/skill_util';
import { withRouter } from 'react-router-dom';
import { healthLevelOne, mod } from '../../../util/game_math_util';

class CharacterCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props}
        this.updateState = this.updateState.bind(this)
        this.updateFinalStats = this.updateFinalStats.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleChange(field) {
        return (e) => {
            this.setState(
                { [field]: e.target.value }
            )
        }
    }

    handleNext() {
        this.setState(
            { nextClicked: true }
        )
    }

    handleSubmit() {

        let conScore = this.state.abilities[2].value
        let conMod = mod(conScore, 2)
        let hd = fullClass[this.state.class].hitDice
        let maxHealth = healthLevelOne(hd, conMod)

        let abilityObj = {}
        this.state.abilities.forEach(ability =>
            abilityObj[ability.title] = ability.value
            )
        
        let characterObj = {
            user: this.props.currentUser,
            race: this.state.finalRace,
            charClass: this.state.class,
            armorType: "noArmor",
            level: 1,
            maxHp: maxHealth,
            currentHp: maxHealth,
            abilities: abilityObj,
            skills: this.state.selectedSkills
        };

        this.props.createCharacter(characterObj)
            .then(result => this.props.history.push(`/character/${result.id}`))

    }

    handleCheckbox(skill) {

        
        if (this.state.selectedSkills.includes(skill)) {
                
            this.state.selectedSkills.splice(this.state.selectedSkills.indexOf(skill), 1)

                this.setState(
                    {
                        selectedSkills: this.state.selectedSkills
                    }
                )
        } else if (this.state.selectedSkills.length - 1 < this.state.numSkills) {

            let addNewSkill = this.state.selectedSkills.concat(skill)

            this.setState(
                {
                    selectedSkills: addNewSkill
                }
            )
        }

    }

    renderFinalStats() {
        if (this.props.order.includes("")) return "please select abilities for each of your rolls"
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
                    <input type="text" placeholder="character name" onChange={this.handleChange('characterName')}/>
                </div>
                { !this.state.nextClicked
                    ?
                    <div className="stat-roller-component">
                        <StatRoller 
                            abilities = {this.props.abilities}
                            rolls = {this.props.rolls}
                            order = {this.props.order}
                            statsRolled = {this.props.statsRolled}
                            updateState={this.updateState}
                        />
                    </div>
                    :
                    ""
                }
                <div className="race-and-class-component">
                    {
                        this.state.statsRolled && !this.state.nextClicked
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
                                <h1>FINAL STATS</h1>
                                <div className="stats-list">
                                    {
                                      
                                        this.renderFinalStats()
                                       
                                    }
                                </div>
                            </div>
                                {(this.state.raceSelected && this.state.classSelected && this.state.subraceSelected && this.state.hasSubraces && !this.state.order.includes("")) || 
                                    (this.state.raceSelected && this.state.classSelected && !this.state.hasSubraces && !this.state.order.includes(""))
                                ?
                                <button className="next-button" onClick={this.handleNext}>Next</button>
                                :
                                ""
                            }
                        </div>
                            :
                        ""
                    }
                </div>
                    <div>
                    { this.state.nextClicked 
                        ?
                        <div>
                        <div>Please select {this.state.numSkills} skills below</div>
                            <div className="skill-selection-container">
                                <div className="skill-type">Strength:
                                    <div className="choose-skills">
                                        {
                                            fullClass[this.state.class].skillList.map( (skill, idx) => {
                                                if (strengthSkills.includes(skill)) {
                                                    return <label key={idx}><input type="checkbox" name={skill} onChange={() => this.handleCheckbox(skill)} disabled={this.state.selectedSkills.length === this.state.numSkills && !this.state.selectedSkills.includes(skill) ? true : false}/>{skill}</label>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="skill-type">Dexterity:
                                    <div className="choose-skills">
                                        {
                                            fullClass[this.state.class].skillList.map((skill, idx) => {
                                                if (dexteritySkills.includes(skill)) {
                                                    return <label key={idx}><input type="checkbox" name={skill} onChange={() => this.handleCheckbox(skill)} disabled={this.state.selectedSkills.length === this.state.numSkills && !this.state.selectedSkills.includes(skill) ? true : false}/>{skill}</label>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="skill-type">Intelligence:
                                    <div className="choose-skills">
                                        {
                                            fullClass[this.state.class].skillList.map((skill, idx) => {
                                                if (intelligenceSkills.includes(skill)) {
                                                    return <label key={idx}><input type="checkbox" name={skill} onChange={() => this.handleCheckbox(skill)} disabled={this.state.selectedSkills.length === this.state.numSkills && !this.state.selectedSkills.includes(skill) ? true : false}/>{skill}</label>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="skill-type">Wisdom:
                                    <div className="choose-skills">
                                        {
                                            fullClass[this.state.class].skillList.map((skill, idx) => {
                                                if (wisdomSkills.includes(skill)) {
                                                    return <label key={idx}><input type="checkbox" name={skill} onChange={() => this.handleCheckbox(skill)} disabled={this.state.selectedSkills.length === this.state.numSkills && !this.state.selectedSkills.includes(skill) ? true : false}/>{skill}</label>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="skill-type">Charisma:
                                    <div className="choose-skills">
                                        {
                                            fullClass[this.state.class].skillList.map((skill, idx) => {
                                                if (charismaSkills.includes(skill)) {
                                                    return <label key={idx}><input type="checkbox" name={skill} onChange={() => this.handleCheckbox(skill)} disabled={this.state.selectedSkills.length === this.state.numSkills && !this.state.selectedSkills.includes(skill) ? true : false}/>{skill}</label>
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.handleSubmit}>Create Character</button>
                        </div>
                        :
                        ""
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(CharacterCreateForm);
