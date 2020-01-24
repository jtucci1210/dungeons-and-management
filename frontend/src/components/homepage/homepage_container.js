
import { connect } from 'react-redux';
import HomePage from './homepage.js';


const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session,
    currentUserID: state.session.user.id
});

const mapDispatchToProps = dispatch => ({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);