import React from 'react';
import '../../../stylesheet/show_page.css'
import * as skills from '../../../util/skill_util'


function MainStats(props) {
    const character = props.character

    const strSkills = (props.character.skills.strengthSkills) ? props.character.skills.strengthSkills : "No Str Skills"

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
                        List of Str Skills
                        <div className='character-str-skills'>
                            {strSkills}
                        </div>
                    </div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Dexterity</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'>3</div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>List of Dex Skills</div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Constitution</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> 15 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>List of cons Skills</div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Intelligence</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> 18 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>List of intel Skills</div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Wisdom</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'>13 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>List of wisd Skills</div>
                </div>
                <div className='show-character-self-stat'>
                    <p>Charisma</p>
                    <div className='show-character-ability-pair'>
                        <div className='show-character-ability-value'> 15 </div>
                        <div className='show-character-ability-modifier'> +2 </div>
                    </div>
                    <div className='str-skills'>List of chari Skills</div>
                </div>
            </div>
        </div>
    )
}

export default MainStats