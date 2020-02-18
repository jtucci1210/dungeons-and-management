import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheet/nav_bar.css'
import '../../stylesheet/css_reset.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            const currentUsername = this.props.currentUser.username
            return (
                <div className="nav-bar-signed-in">
                    <div className="nav-bar-greeting-message">
                        <div className="nav-bar-greeting-message">Welcome {currentUsername}!</div>
                    </div>
                    <button className='nav-bar-tutorial-button' onClick={() => this.props.history.push('/tutorial/createcharacter')}>
                        Tutorial
                    </button>
                    <button onClick={this.logoutUser} className='nav-bar-logout-button'>
                        Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div className="nav-bar-login-signup">
                    <button className="login-signup-button" onClick={()=>this.props.openModal('signup')}>Signup</button>
                    <button className="login-signup-button" onClick={()=>this.props.openModal('login')}>Login</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                {/* <div className="imma-spacer"></div> */}
                <div 
                    className="git-icon"
                    onClick={() => window.open('https://github.com/jtucci1210/dungeons-and-management')}
                ><i class="fab fa-github"></i></div>
                <Link className="nav-bar-title" to='/'>
                    <h1 className='nav-bar-page-title'>Dungeons <i className="fab fa-d-and-d"></i> Management</h1>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;