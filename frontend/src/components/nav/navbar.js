import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheet/nav_bar.css'
import '../../stylesheet/css_reset.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }


    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount() {
    //    this.props.fetchCurrentUser();
        // Promise.all([user]).then(() => this.setState({ loaded: true }))
    }


    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            debugger
            const currentUsername = this.props.currentUser
            return (
                <div className="nav-bar-signed-in">
                    <div className="nav-bar-greeting-message">
                        {/* <div className="nav-bar-greeting-message">Welcome {currentUsername}!</div> */}
                    </div>
                    <button className='nav-bar-tutorial-button'>
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
                <div className="imma-spacer"></div>
                <Link className="nav-bar-title" to='/'>
                    <h1 className='nav-bar-page-title'>Dungeons <i className="fab fa-d-and-d"></i> Management</h1>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;