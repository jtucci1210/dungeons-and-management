import React from 'react';
import '../../stylesheet/homepage.css'
import splashImg from './splash_image.jpg'
import CharIndex from './char_index';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

<<<<<<< HEAD
    characterInfo() {
        const characters = [
            { id: "5e28927822d5dd01891a7618" , name: 'character1', race: 'woodElf', health: 20, class: 'rogue' },
            { id: "5e28929522d5dd01891a7619", name: 'character2', race: 'Elf', health: 40, class: 'rogue' },
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
    

=======
>>>>>>> dev_branch
    render() {
        
        return (
          <div className="home-page-main-box">
            <div className="home-page-characters">
              <CharIndex />
            </div>
            <div className="home-page-campaign-box">
              <div className="home-page-campaign-title">Campaign Menu</div>
              <div className="home-page-campaign-links">
                <button className="start-campaign">Create Campaign</button>
                <div className="home-page-lobby-join">
                  <form className="home-page-lobby-form">
                    <input
                      type="text"
                      className="lobby-number"
                      placeholder="Lobby Number"
                    />
                    <input
                      className="join-campaign"
                      type="submit"
                      value="Join"
                    ></input>
                  </form>
                </div>
              </div>
            </div>
            <div className="main-page-background-img">
              <img src={splashImg} alt="background" className="splash-image" />
            </div>
          </div>
        );
    }
}

export default HomePage;