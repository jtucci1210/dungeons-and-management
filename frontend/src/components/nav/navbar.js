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
            return (
                <div>
                    <p className='nav-bar-welcome-message'>Welcome to Dungeons and Management</p>
                    <button onClick={this.logoutUser} className='nav-bar-logout-button'>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="nav-bar-login-signup">
                    {/* <Link to={'/signup'} className="nav-bar-signup">Signup</Link> */}
                    <button onClick={()=>this.props.openModal('signup')}>Signup</button>
                    <button onClick={()=>this.props.openModal('login')}>Login</button>
                    {/* <Link to={'/login'} className='nav-bar-login'>Login</Link> */}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <Link className="nav-bar-title" to='/'>
                    <h1 className='nav-bar-page-title'>Dungeons and Management</h1>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;