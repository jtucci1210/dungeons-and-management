import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheet/homepage.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <div className="home-page-main-box">
                    <div className="home-page-characters">
                        <ul> Character 1</ul>
                        <ul> Character 2</ul>
                        <ul> Character 3</ul>
                    </div>
                    <div className="home-page-campaign-box">
                        <div className="home-page-campaign-links">
                            <p>Campaign Menu</p>
                            <button>
                                Join
                            </button>
                            <button>
                                Start
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default HomePage;