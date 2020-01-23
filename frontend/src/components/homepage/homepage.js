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
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
            { name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
        ];

        return (
            <div className="index-characters">
                    <Link to={`/characters/new`} className="home-page-create-character">
                        <div className="home-page-create-character-text"> + </div>
                    </Link>
                {characters.map((character, i) => (
                    <div key={`character-${i}`} className="index-characters-character-info">
                        <Link to={`/characters/${i + 1}`} className='home-characters-link'>
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
                <script src="/socket.io/socket.io.js"></script>
                <script src="routes/api/web-socket.js"></script>
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