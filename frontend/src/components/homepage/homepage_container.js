
import { connect } from 'react-redux';
import HomePage from './homepage.js';
import { joinCampaign } from '../../actions/campaign_actions'

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session
});

const mapDispatchToProps = dispatch => ({
    joinCampaign: (character, charId) => dispatch(joinCampaign(character, charId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);