import React from 'react';
import '../../stylesheet/homepage.css'
import splashImg from './splash_image.jpg'
import CharIndex from './char_index';



class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="home-page-main-box">
                    <div className="home-page-characters">
                        <CharIndex />
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