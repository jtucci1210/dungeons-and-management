import React from 'react';
import '../../../stylesheet/show_page.css'
import * as skills from '../../../util/skill_util'
import * as math from '../../../util/game_math_util'
import * as race from '../../../util/race_util'
import * as armor from '../../../util/armor_util'
import * as classUtil from '../../../util/class_util'


class EditMainStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: this.props.characters,
            currentUser: this.props.session,
            currentUserID: this.props.session.user.id,
            race: this.props.characters.race,
            charClass: this.props.characters.charClass,
            armorType: this.props.characters.armorType,
            level: this.props.characters.level,
            maxHp: this.props.characters.maxHp,
            currentHp: this.props.characters.currentHp,
        }

        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.showSkillMod = this.showSkillMod.bind(this)
    }
   
    handleCheckbox(skill, stat) {
        const characterSkills = this.props.character.skills
        const characterClass = this.props.character.charClass
        const fullClass = classUtil.fullClass
        const classInfo = fullClass[characterClass].savingThrows
        if (skill.toLowerCase() === 'Saving Throws'.toLowerCase() && classInfo.includes(stat.toLowerCase())) {
            return true
        } else if (characterSkills.includes(skill.toLowerCase())) {
            return true
        }
    }
    showSkillMod(skill, stat, prof) {
        const characterSkills = this.props.character.skills
        const characterClass = this.props.character.charClass
        const fullClass = classUtil.fullClass
        const classInfo = fullClass[characterClass].savingThrows
        if (characterSkills.includes(skill.toLowerCase())) {
            return math.mod(stat, prof)
        } else {
            return math.mod(stat)
        }
    }

 

    
    render () {

        const character = this.props.character
        let strSkills = ['Saving Throws','ATHLETICS']
        let dexSkills = ['Saving Throws','ACROBATICS', 'SLEIGHT OF HAND', 'STEALTH']
        let constSkills = ['Saving Throws']
        let intelSkills = ['Saving Throws','ARCANA', 'HISTORY', 'INVESTIGATION', 'NATURE', 'RELIGION']
        let wisdSkills = ['Saving Throws','ANIMAL HANDLING', 'INSIGHT', 'MEDICINE', 'PERCEPTION', 'SURVIVAL']
        let charSkills = ['Saving Throws','DECEPTION', 'INTIMIDATION', 'PERFORMANCE', 'PERSUASION']

        let proficiency
        if (character.level < 5) {
            proficiency = 2
        } else if (character.level > 4 && character.level < 9) {
            proficiency = 3
        } else if (character.level > 8 && character.level < 13) {
            proficiency = 4
        } else if (character.level > 12 && character.level < 17) {
            proficiency = 5
        } else {
            proficiency = 6
        }


        let passivePerception
        if (character.skills.includes('perception')) {
            passivePerception = math.passivePerception(math.mod(character.abilities.wisdom), proficiency)
        } else {
            passivePerception = math.passivePerception(math.mod(character.abilities.wisdom))
        }
        const fullRace = race.fullRace
        const characterRace = character.race
        const armorClass = armor.armorClass
        const characterArmor = armor.fullArmor[character.armorType]
            return (
                <div className='show-character-main-stats'>
                    <div className='show-character-battle-stats'>
                        <div className='show-character-battle-stats-info'>
                            <div>
                                <p className='battle-state-title'>A.C.</p>
                                <div className='battle-state-title-info'>{armorClass(characterArmor, math.mod(character.abilities.dexterity), )}</div>
                                <div className='battle-state-armor'> {character.armorType} </div>
                            </div>
                            <div>
                                <p className='battle-state-title'>Initiative</p>
                                <div className='battle-state-title-info'>{math.mod(character.abilities.dexterity)}</div>
                            </div>
                            <div>
                                <p className='battle-state-title'>Speed</p>
                                <div className='battle-state-title-info'>{fullRace[characterRace].speed}</div>
                            </div>
                            <div>
                                <p className='battle-state-title'>Proficiency Bonus</p>
                                <div className='battle-state-title-info'>{proficiency}</div>
                            </div>
                            <div>
                                <p className='battle-state-title'>Passive Wisdom (Perception)</p>
                                <div className='battle-state-title-info'>{passivePerception}</div>
                            </div>
                        </div>
                    </div>
                    <div className='show-character-all-stats'>
                        <div className='show-character-self-stat'>
                            <p>Strength</p>
                            <div className='show-character-ability-pair'>
                                <div className='show-character-ability-value'> {character.abilities.strength} </div>
                                <div className='show-character-ability-modifier'> {math.mod(character.abilities.strength)} </div>
                            </div>
                            <div className='str-skills'>
                                <p> Strength Skills </p>
                                <div className='character-skills'>
                                    {strSkills.map((skill, i) => (
                                        <ul key={i+skill}>
                                            <div className='character-skills-checkbox'>
                                                <input checked={this.handleCheckbox(skill, 'strength')} type='checkbox' disabled={true} />  {this.showSkillMod(skill, character.abilities.strength, proficiency)} {skill}                                
                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='show-character-self-stat'>
                            <p>Dexterity</p>
                            <div className='show-character-ability-pair'>
                                <div className='show-character-ability-value'>{character.abilities.dexterity}</div>
                                <div className='show-character-ability-modifier'> {math.mod(character.abilities.dexterity)} </div>
                            </div>
                            <div className='str-skills'>
                                <p> Dexterity Skills </p>
                                <div className='character-skills'>
                                    {/* <input checked={this.handleThrow('dexterity')} className='character-skills-checkbox' type='checkbox' disabled={true}/>Saving Throw */}
                                    {dexSkills.map((skill, i) => (
                                        <ul key={i+skill + 1}>
                                            <div className='character-skills-checkbox'>
                                                <input checked={this.handleCheckbox(skill, 'dexterity')} type='checkbox' disabled={true} />  {this.showSkillMod(skill, character.abilities.dexterity, proficiency)} {skill}                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='show-character-self-stat'>
                            <p>Constitution</p>
                            <div className='show-character-ability-pair'>
                                <div className='show-character-ability-value'> {character.abilities.constitution} </div>
                                <div className='show-character-ability-modifier'> {math.mod(character.abilities.constitution)} </div>
                            </div>
                            <div className='str-skills'>
                                <p> Constitution Skills </p>
                                <div className='character-skills'>
                                    {constSkills.map((skill, i) => (
                                        <ul key={i+skill + 11}>
                                            <div className='character-skills-checkbox'>
                                                <input checked={this.handleCheckbox(skill, 'constitution')} type='checkbox' disabled={true} />  {this.showSkillMod(skill, character.abilities.constitution, proficiency)} {skill}                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='show-character-self-stat'>
                            <p>Intelligence</p>
                            <div className='show-character-ability-pair'>
                                <div className='show-character-ability-value'> {character.abilities.intelligence} </div>
                                <div className='show-character-ability-modifier'> {math.mod(character.abilities.intelligence)} </div>
                            </div>
                            <div className='str-skills'>
                                <p> Intelligence Skills </p>
                                <div className='character-skills'>                                    {intelSkills.map((skill, i) => (
                                        <ul key={i+skill + 12}>
                                            <div className='character-skills-checkbox'>
                                                <input checked={this.handleCheckbox(skill, 'intelligence')} type='checkbox' disabled={true} />  {this.showSkillMod(skill, character.abilities.intelligence, proficiency)} {skill} 
                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='show-character-self-stat'>
                            <p>Wisdom</p>
                            <div className='show-character-ability-pair'>
                                <div className='show-character-ability-value'>{character.abilities.wisdom} </div>
                                <div className='show-character-ability-modifier'> {math.mod(character.abilities.wisdom)} </div>
                            </div>
                            <div className='str-skills'>
                                <p> Wisdom Skills </p>
                                <div className='character-skills'>
                                    {wisdSkills.map((skill, i) => (
                                        <ul key={i+skill + 13}>
                                            <div className='character-skills-checkbox'>
                                                <input checked={this.handleCheckbox(skill, 'wisdom')} type='checkbox' disabled={true} />  {this.showSkillMod(skill, character.abilities.wisdom, proficiency)} {skill}                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='show-character-self-stat'>
                            <p>Charisma</p>
                            <div className='show-character-ability-pair'>
                                <div className='show-character-ability-value'> {character.abilities.charisma} </div>
                                <div className='show-character-ability-modifier'> {math.mod(character.abilities.charisma)} </div>
                            </div>
                            <div className='str-skills'>
                                <p> Charisma Skills </p>
                                <div className='character-skills'>
                                    {charSkills.map((skill, i) => (
                                        <ul key={i+skill + 14}>
                                            <div className='character-skills-checkbox'>
                                                <input checked={this.handleCheckbox(skill, 'charisma')} type='checkbox' disabled={true} />  {this.showSkillMod(skill, character.abilities.charisma, proficiency)} {skill}                                            </div>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default EditMainStats