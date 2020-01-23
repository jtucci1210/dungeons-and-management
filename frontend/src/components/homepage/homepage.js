import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheet/homepage.css'
import splashImg from './splash_image.jpg'


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    characterInfo() {
        const characters = [
            { id: "5e28927822d5dd01891a7618" , name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { id: "5e28929522d5dd01891a7619", name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 12,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 13,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 14,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 15,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 16,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 17,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 18,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 81,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 91,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 991,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 11,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 21,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 31,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 41,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 51,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 61,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 71,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 881,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 199,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 177,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 144,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 133,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 122,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 111,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 112,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 113,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 114,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 115,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 116,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 127,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 1822,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 11221,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 1131,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 11313,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 1141414,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 11231,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 11231,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 1123,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            // { id: 112243,name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            // { id: 112333,name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
        ];

        return (
            <div className="index-characters">
                    <Link to={`/characters/new`} className="home-page-create-character">
                        <div className="home-page-create-character-text"> + </div>
                    </Link>
                {characters.map((character, i) => (
                    <div key={`character-${i}`} className="index-characters-character-info">
                        <Link to={`/characters/${character.id}`} className='home-characters-link'>
                        <div className='character-box'>
                            <div className="character-name-index">
                                <h3> Character Name: </h3> {character.name}
                            </div>
                            <div className="character-image-index">
                                <div className='character-image'>Img placeholder</div>
                                <div className="character-image-health-index">
                                    Health: {character.health}
                                </div>
                            </div>
                            <div className="character-race-index">
                                <h3>Race: </h3>  {character.race}
                            </div>
                            <div className="character-class-index">
                                <h3>Class: </h3> {character.class}
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
                  
            </div>
        )
    }
    

    render() {
        
        return (
            <div className="home-page-main-box">
                    <div className="home-page-characters">
                        {this.characterInfo()}
                    </div>
                    <div className="home-page-campaign-box">
                        <div className="home-page-campaign-title">
                            Campaign Menu
                        </div>
                        <div className="home-page-campaign-links">
                            <div className='home-page-campaign-start'>
                                <button className='home-page-campaign-start'>
                                    Create a Campaign
                                </button>
                                <div className="home-page-lobby-join">
                                    <form className="home-page-lobby-form">
                                        <label>
                                            <input type="text"
                                            placeholder="Lobby Number"
                                            />
                                        </label>
                                    </form>
                                    <button className='home-page-campaign-join'>
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='main-page-background-img'>
                    <img src={splashImg} alt="background" className="splash-image" />
                </div>  
            </div>
        );
    }
}

export default HomePage;