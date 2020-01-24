import React from 'react';
import '../../../stylesheet/show_page.css'



function MainStats(props) {
    const character = props.characterInfo
    return (
        <div className='show-character-main-stats'>
            <div className='show-character-battle-stats'>
                <div className='show-character-battle-stats-titles'>
                    <p className='battle-state-title'>A.C.</p>
                    <p className='battle-state-title'>Initiative</p>
                    <p className='battle-state-title'>Speed</p>
                    <p className='battle-state-title'>P.P</p>
                    <p className='battle-state-title'>Prot</p>
                </div>
                <div className='show-character-battle-stats-info'>
                    <div className='battle-state-title'>A.C. value</div>
                    <div className='battle-state-title'>Initiative value</div>
                    <div className='battle-state-title'>Speed value</div>
                    <div className='battle-state-title'>P.P value</div>
                    <div className='battle-state-title'>Prot value</div>
                </div>
            </div>
            <div className='show-character-self-stats'>
                <div className='show-character-self-stat-str'>
                    <p>Strength</p>
                    <div className='str-value'> 8</div>
                    <div className='str-skills'>List of Str Skills</div>
                </div>
                <div className='show-character-self-stat-dex'>
                    <p>Dexterity</p>
                    <div className='str-value'>3</div>
                    <div className='str-skills'>List of Dex Skills</div>
                </div>
                <div className='show-character-self-stat-cons'>
                    <p>Constitution</p>
                    <div className='str-value'> 15 </div>
                    <div className='str-skills'>List of cons Skills</div>
                </div>
                <div className='show-character-self-stat-intel'>
                    <p>Intelligence</p>
                    <div className='str-value'> 18 </div>
                    <div className='str-skills'>List of intel Skills</div>
                </div>
                <div className='show-character-self-stat-wisd'>
                    <p>Wisdom</p>
                    <div className='str-value'>13 </div>
                    <div className='str-skills'>List of wisd Skills</div>
                </div>
                <div className='show-character-self-stat-chari'>
                    <p>Charisma</p>
                    <div className='str-value'> 15 </div>
                    <div className='str-skills'>List of chari Skills</div>
                </div>
            </div>
        </div>
    )
}

export default MainStats