import React from 'react';
import '../../../stylesheet/show_page.css'
import * as skills from '../../../util/skill_util'


function MainStats(props) {
    const character = props.character
    const strSkills = ['SAVING THROW', 'ATHLETICS']
    const dexSkills = ['SAVING THROW', 'ACROBATICS','SLEIGHT OF HAND', 'STEALTH']
    const constSkills = ['SAVING THROW']
    const intelSkills = ['SAVING THROW', 'ARCANA', 'HISTORY', 'INVESTIGATION', 'NATURE', 'RELIGION']
    const wisdSkills = ['SAVING THROW', 'ANIMAL HANDLING', 'INSIGHT', 'MEDICINE', 'PERCEPTION', 'SURVIVAL']
    const charSkills = ['SAVING THROW', 'DECEPTION', 'INTIMIDATION', 'PERFORMANCE', 'PERSUASION']
    

    return (
        <div className='show-character-main-stats'>
            <div className='show-character-battle-stats'>
                <div className='show-character-battle-stats-info'>
                    <div>
                        <p className='battle-state-title'>A.C.</p>
                        <div className='battle-state-title-info'>1111</div>
                    </div>
                    <div>
                        <p className='battle-state-title'>Speed</p>
                        <div className='battle-state-title-info'>1111</div>
                    </div>
                    <div>
                        <p className='battle-state-title'>P.P</p>
                        <div className='battle-state-title-info'>1111</div>
                    </div>
                    <div>
                        <p className='battle-state-title'>Prot</p>
                        <div className='battle-state-title-info'>1111</div>
                    </div>
                </div>
            </div>
            <div className='show-character-all-stats'>
                <div className='show-character-self-stat'>
                    <p>Strength</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> 8</div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>
                        <p> List of Str Skills </p>
                        <div className='character-skills'>
                            {strSkills.map((skill, i) => (
                                <ul>
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
                        <div className='show-character-ability-value'>3</div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>
                        <p> List of Dex Skills </p>
                        <div className='character-skills'>
                            {dexSkills.map((skill, i) => (
                                <ul>
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
                        <div className='show-character-ability-value'> 15 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>
                        <p> List of Const. Skills </p>
                        <div className='character-skills'>
                            {constSkills.map((skill, i) => (
                                <ul>
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
                        <div className='show-character-ability-value'> 18 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                     <div className='str-skills'>
                        <p> List of Intel. Skills </p>
                        <div className='character-skills'>
                            {intelSkills.map((skill, i) => (
                                <ul>
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
                        <div className='show-character-ability-value'>13 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                     <div className='str-skills'>
                        <p> List of Wisd. Skills </p>
                        <div className='character-skills'>
                            {wisdSkills.map((skill, i) => (
                                <ul>
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
                        <div className='show-character-ability-value'> 15 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                     <div className='str-skills'>
                        <p> List of Char. Skills </p>
                        <div className='character-skills'>
                            {charSkills.map((skill, i) => (
                                <ul>
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