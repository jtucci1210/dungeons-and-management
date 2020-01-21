
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);