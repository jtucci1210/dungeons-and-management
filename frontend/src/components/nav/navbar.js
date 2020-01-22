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
            const currentUsername = this.props.currentUser.user.username
            return (
                <div className="nav-bar-signed-in">
                    <div className='nav-bar-tutorial-button'>
                        Tutorial Button
                    </div>
                    <div className="nav-bar-greeting-message">
                        <div className="nav-bar-greeting-message">Welcome {currentUsername}!</div>
                    </div>
                    <button onClick={this.logoutUser} className='nav-bar-logout-button'>
                        Logout
                    </button>
                </div>
            );
        } else {
            return (
                <div className="nav-bar-login-signup">
                    <button onClick={()=>this.props.openModal('signup')}>Signup</button>
                    <button onClick={()=>this.props.openModal('login')}>Login</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="nav-bar-logo"></div>
                <Link className="nav-bar-title" to='/'>
                    <h1 className='nav-bar-page-title'>Dungeons <i className="fab fa-d-and-d"></i> Management</h1>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;