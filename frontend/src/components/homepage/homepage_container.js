
import { connect } from 'react-redux';
import HomePage from './homepage.js';
import { getCharacters } from '../../actions/character_actions.js';
import { joinCampaign, createCampaign } from '../../actions/campaign_actions';



const mapStateToProps = state => {
    return {
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session,
    currentUserID: state.session.user.id,
    characters: Object.values(state.characters)
    }
};

const mapDispatchToProps = dispatch => ({
    getCharacters: userId => dispatch(getCharacters(userId)),
    joinCampaign: (campaignId, charId) => dispatch(joinCampaign(campaignId, charId)),
    createCampaign: () => dispatch(createCampaign())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);