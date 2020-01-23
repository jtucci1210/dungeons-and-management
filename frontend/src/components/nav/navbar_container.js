
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
// import { fetchCurrentUser } from '../../actions/session_actions.js';
import NavBar from './navbar';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user
    })
}; 

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal)),
    // fetchCurrentUser: () => dispatch(fetchCurrentUser())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);