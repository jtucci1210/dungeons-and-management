import React from 'react';


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
            <div className='show-character-character-stats'>
                <div className='show-character-character-stat-str'>

                </div>
                <div className='show-character-character-stat-dex'>

                </div>
                <div className='show-character-character-stat-cons'>

                </div>
                <div className='show-character-character-stat-intel'>

                </div>
                <div className='show-character-character-stat-wisd'>

                </div>
                <div className='show-character-character-stat-char'>

                </div>
            </div>
        </div>
    )
}

export default MainStats