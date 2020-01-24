import React from 'react';
import '../../../stylesheet/show_page.css'


function GeneralStats(props) {
    const character = props.character
    return (
        <div className='show-character-general-stats'>
            {/* <img></img> */}
            <p className="placeholder-img">IMG PLACEHOLDER HERE</p>
            <div className="show-character-general-info">
                <div className='show-character-general-race'>
                    <p className='show-character-general-race'>
                        Race: 
                    </p>
                    <div className='show-character-general-race-info'>
                        {character.race}
                    </div>
                </div>
                <div className='show-character-general-lvl'>
                    <p className='show-character-general-level'>
                        Level:
                    </p>
                    <div className='show-character-general-level-info'>
                        {character.level}
                    </div>
                </div>
            </div>
                <div className='show-character-general-class'>
                    <p className='show-character-general-race'>
                        Class:
                    </p>
                    <div className='show-character-general-class-info'>
                        {character.charClass}
                    </div>
                </div>
        </div>
    )
}

export default GeneralStats