import { connect } from "react-redux";
import CampaignRoom from "./campaign";
import { joinCampaign } from "../../actions/campaign_actions";
import { getCampaignCharacters, editCharacter } from "../../actions/character_actions";

const mapStateToProps = state => {

	return {
		characters: state.characters,
		currentUser: state.session.user
	}
};

const mapDispatchToProps = dispatch => ({
	joinCampaign: (character, charId) =>
		dispatch(joinCampaign(character, charId)),
	getCampaignCharacters: charIds => dispatch(getCampaignCharacters(charIds)),
	editCharacter: (character) => dispatch(editCharacter(character))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignRoom);
