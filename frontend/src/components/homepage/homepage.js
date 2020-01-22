import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheet/homepage.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        const characters = [
            "character1", 
            "character2", 
            "character3", 
            "character4", 
            "character5", 
            "character6" ];
        return (
            <div className="home-page-main-box">
                    <div className="home-page-characters">
                        {characters.map((character, i) => (
                            <ul className="login-characters" key={`character-${i}`}>
                                {character}
                            </ul>
                        ))}
                        <div>
                            <Link to={`/`} className="home-page-create-character">
                                <div className="home-page-create-character"> + </div>
                            </Link>
                        </div>    
                    </div>
                    <div className="home-page-campaign-box">
                        <div className="home-page-campaign-title">
                            Campaign Menu
                        </div>
                        <div className="home-page-campaign-links">
                            <div className='home-page-campaign-start'>
                                <button className='home-page-campaign-start'>
                                    Start
                                </button>
                                <form className>
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
        );
    }
}

export default HomePage;