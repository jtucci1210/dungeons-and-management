import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheet/nav_bar.css'

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
            return (
                <div>
                    <p>Welcome to Dungeons and Management</p>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="nav-bar-login-signup">
                    <Link to={'/signup'} className="nav-bar-signup">Signup</Link>
                    <Link to={'/login'} className='nav-bar-login'>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <h1>Dungeons and Management</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;