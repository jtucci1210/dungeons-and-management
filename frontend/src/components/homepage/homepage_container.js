
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import HomePage from './homepage.js';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);