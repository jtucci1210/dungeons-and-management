import React from 'react';
import '../../../stylesheet/show_page.css'
import * as skills from '../../../util/skill_util'
import * as math from '../../../util/game_math_util'
import * as race from '../../../util/race_util';


function MainStats(props) {
    const character = props.character
    const strSkills = ['SAVING THROW', 'ATHLETICS']
    const dexSkills = ['SAVING THROW', 'ACROBATICS','SLEIGHT OF HAND', 'STEALTH']
    const constSkills = ['SAVING THROW']
    const intelSkills = ['SAVING THROW', 'ARCANA', 'HISTORY', 'INVESTIGATION', 'NATURE', 'RELIGION']
    const wisdSkills = ['SAVING THROW', 'ANIMAL HANDLING', 'INSIGHT', 'MEDICINE', 'PERCEPTION', 'SURVIVAL']
    const charSkills = ['SAVING THROW', 'DECEPTION', 'INTIMIDATION', 'PERFORMANCE', 'PERSUASION']
    let proficiency
    if (character.level < 5) {
        proficiency = 2
    } else if (character.level > 4 && character.level <9 ) {
        proficiency = 3
    } else if (character.level > 8 && character.level < 13) {
        proficiency = 4
    } else if (character.level > 12 && character.level < 17 ) {
        proficiency = 5
    } else {
        proficiency = 6
    }
    const passivePerception = math.passivePerception(character.abilities.wisdom, proficiency)
    const fullRace = race.fullRace
    const characterRace = character.race
    
    return (
        <div className='show-character-main-stats'>
            <div className='show-character-battle-stats'>
                <div className='show-character-battle-stats-info'>
                    <div>
                        <p className='battle-state-title'>A.C.</p>
                        <div className='battle-state-title-info'>1111</div>
                    </div>
                    <div>
                        <p className='battle-state-title'>Initiative</p>
                        <div className='battle-state-title-info'>1111</div>
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
                        <div className='show-character-ability-modifier'> {math.mod(character.abilities.strength, proficiency)} </div>
                    </div>
                    <div className='str-skills'>
                        <p> Strength Skills </p>
                        <div className='character-skills'>
                            {strSkills.map((skill, i) => (
                                <ul key={i+skill}>
                                    <div className='character-skills-checkbox'>
                                        <input type ='checkbox'/> {skill}
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
                        <div className='show-character-ability-modifier'> {math.mod(character.abilities.dexterity,proficiency)} </div>
                    </div>
                    <div className='str-skills'>
                        <p> Dexterity Skills </p>
                        <div className='character-skills'>
                            {dexSkills.map((skill, i) => (
                                <ul key={i+skill + 1}>
                                    <div className='character-skills-checkbox'>
                                        <input type='checkbox' /> {skill}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Constitution</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> {character.abilities.constitution} </div>
                        <div className='show-character-ability-modifier'> {math.mod(character.abilities.constitution, proficiency)} </div>
                    </div>
                    <div className='str-skills'>
                        <p> Constitution Skills </p>
                        <div className='character-skills'>
                            {constSkills.map((skill, i) => (
                                <ul key={i+skill + 11}>
                                    <div className='character-skills-checkbox'>
                                        <input type='checkbox' /> {skill}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Intelligence</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> {character.abilities.intelligence} </div>
                        <div className='show-character-ability-modifier'> {math.mod(character.abilities.intelligence, proficiency)} </div>
                    </div>
                     <div className='str-skills'>
                        <p> Intelligence Skills </p>
                        <div className='character-skills'>
                            {intelSkills.map((skill, i) => (
                                <ul key={i+skill + 12}>
                                    <div className='character-skills-checkbox'>
                                        <input type='checkbox' /> {skill}
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
                        <div className='show-character-ability-modifier'> {math.mod(character.abilities.wisdom, proficiency)} </div>
                    </div>
                     <div className='str-skills'>
                        <p> Wisdom Skills </p>
                        <div className='character-skills'>
                            {wisdSkills.map((skill, i) => (
                                <ul key={i+skill + 13}>
                                    <div className='character-skills-checkbox'>
                                        <input type='checkbox' /> {skill}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Charisma</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> {character.abilities.charisma} </div>
                        <div className='show-character-ability-modifier'> {math.mod(character.abilities.charisma, proficiency)} </div>
                    </div>
                     <div className='str-skills'>
                        <p> Charisma Skills </p>
                        <div className='character-skills'>
                            {charSkills.map((skill, i) => (
                                <ul key={i+skill + 14}>
                                    <div className='character-skills-checkbox'>
                                        <input type='checkbox' /> {skill}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainStats