import React from 'react';
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/drop_down.css'
import '../../../stylesheet/character_edit_form.css'
import * as math from '../../../util/game_math_util'
import * as race from '../../../util/race_util'
import * as armor from '../../../util/armor_util'
import * as classUtil from '../../../util/class_util'
import { Link } from 'react-router-dom';



class EditMainStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.props, loaded: false }
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.showSkillMod = this.showSkillMod.bind(this)
        this.addOrRemoveLevel = this.addOrRemoveLevel.bind(this)
        // this.changeArmor = this.changeArmor.bind(this)
    }

    addOrRemoveLevel(e) {
        const value = e.target.name
        const character = this.props.character
        const fullClass = classUtil.fullClass
        const hitDice = fullClass[character.charClass].hitDice
        let newLevel = character.level
        let str = character.abilities.strength
        let dex = character.abilities.dexterity
        let constit = character.abilities.constitution
        let intel = character.abilities.intelligence
        let wisd = character.abilities.wisdom
        let char = character.abilities.charisma

        if (value === 'decrease-str' && str > 1) {
            str = str - 1
        } else if (value === 'increase-str') {
            str = str + 1
        }
        else if (value === 'decrease-dex' && dex > 1) {
            dex = dex - 1
        } else if (value === 'increase-dex') {
            dex = dex + 1
        }
        else if (value === 'decrease-constit' && constit > 1) {
            constit = constit - 1
        } else if (value === 'increase-constit') {
            constit = constit + 1
        }
        else if (value === 'decrease-intel' && intel > 1) {
            intel = intel - 1
        } else if (value === 'increase-intel') {
            intel = intel + 1
        }
        else if (value === 'decrease-wisd' && wisd > 1) {
            wisd = wisd - 1
        } else if (value === 'increase-wisd') {
            wisd = wisd + 1
        }
        else if (value === 'decrease-char' && char > 1) {
            char = char - 1
        } else if (value === 'increase-char') {
            char = char + 1
        }

       debugger
        let characterObj = {
            _id: this.props.character._id,
            user: this.state.currentUserID,
            name: this.props.character.name,
            race: this.props.character.race,
            charClass: this.props.character.charClass,
            armorType: this.props.character.armorType,
            level: newLevel,
            maxHp: this.healthManagement(hitDice),
            currentHp: this.props.character.currentHp,
            abilities: {
                strength: str,
                dexterity: dex,
                constitution: constit,
                intelligence: intel,
                wisdom: wisd,
                charisma: char,

            },
            skills: this.props.character.skills,
            dateCreated: this.props.character.dateCreated
            
        };
        if (str  !== this.props.character.abilities.strength
            || 
            dex  !== this.props.character.abilities.dexterity
            || 
            constit  !== this.props.character.abilities.constitution
            || 
            wisd  !== this.props.character.abilities.wisdom
            || 
            intel  !== this.props.character.abilities.intelligence
            || 
            char  !== this.props.character.abilities.charisma) {
            this.props.editCharacter(characterObj)
        }
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
        if (characterSkills.includes(skill.toLowerCase())) {
            return math.mod(stat, prof)
        } else {
            return math.mod(stat)
        }
    }

    
    render () {

        const character = this.props.character
        let strSkills = ['Saving Throw', 'Athletics']
        let dexSkills = ['Saving Throw', 'Acrobatics', 'Sleight of hand', 'Stealth']
        let constSkills = ['Saving Throw']
        let intelSkills = ['Saving Throw', 'Arcanas', 'History', 'Investigation', 'Nature', 'Religion']
        let wisdSkills = ['Saving Throw', 'Animal handling', 'Insight', 'Medicine', 'Perception', 'Survival']
        let charSkills = ['Saving Throw', 'Deception', 'Intimidation', 'Performance', 'Persuasion']

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
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='increase-str'> + </button>
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease-str'> - </button>
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
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='increase-dex'> + </button>
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease-dex'> - </button>
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
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='increase-constit'> + </button>
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease-constit'> - </button>
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
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='increase-intel'> + </button>
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease-intel'> - </button>
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
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='increase-wisd'> + </button>
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease-wisd'> - </button>
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
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='increase-char'> + </button>
                                <button className="increase-decrease" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease-char'> - </button>
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
                    <div className="save-character-edits">
                        <Link
                            to={`/characters/${character._id}`}
                            className="show-character-link"
                        >
                            Save Changes
                        </Link>
                    </div>
                </div>
            )
    }
}

export default EditMainStats