import { connect } from "react-redux";
import HomePage from "./homepage.js";
import { getCharacters } from "../../actions/character_actions.js";
import {createCampaign,fetchCampaignByKey} from "../../actions/campaign_actions";

const mapStateToProps = state => {
	return {
		loggedIn: state.session.isAuthenticated,
		currentUser: state.session,
		currentUserID: state.session.user.id,
		characters: Object.values(state.characters)
	};
};

const mapDispatchToProps = dispatch => ({
	getCharacters: userId => dispatch(getCharacters(userId)),
	createCampaign: (charId) => dispatch(createCampaign(charId)),
	fetchCampaignByKey: (campRoom, charId) => dispatch(fetchCampaignByKey(campRoom, charId))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
