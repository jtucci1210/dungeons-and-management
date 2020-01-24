import React from 'react';
import '../../../stylesheet/show_page.css'


function GeneralStats(props) {
    const character = props.character
    return (
        <div className='show-character-general-stats'>
            <img></img>
            <div className='show-character-general-race'>
                <p className='show-character-general-race'>
                    Race:
                </p>
                <div className='show-character-general-race'>
                    {character.race}
                </div>
            </div>
            <div className='show-character-general-lvl'>
                <p className='show-character-general-race'>
                    Level:
                </p>
                <div className='show-character-general-level'>
                    {character.level}
                </div>
            </div>
            <div className='show-character-general-class'>
                <p className='show-character-general-race'>
                    Class:
                </p>
                <div className='show-character-general-class'>
                    {character.class}
                </div>
            </div>
        </div>
    )
}

export default GeneralStats