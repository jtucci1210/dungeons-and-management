import { connect } from "react-redux";
import CampaignRoom from "./campaign";
import { joinCampaign, leaveCampaign } from "../../actions/campaign_actions";
import { getCampaignCharacters, editCharacter } from "../../actions/character_actions";

const mapStateToProps = state => {

	return {
		characters: state.characters,
		currentUser: state.session.user
	}
};

const mapDispatchToProps = dispatch => ({
	joinCampaign: (id, charId) => dispatch(joinCampaign(id, charId)),
	getCampaignCharacters: charIds => dispatch(getCampaignCharacters(charIds)),
	editCharacter: (character) => dispatch(editCharacter(character)),
	leaveCampaign: (id, charId) => dispatch(leaveCampaign(id, charId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignRoom);
