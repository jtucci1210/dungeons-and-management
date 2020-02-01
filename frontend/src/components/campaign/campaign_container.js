import { connect } from "react-redux";
import CampaignRoom from "./campaign";
import { leaveCampaign, getCampaign } from "../../actions/campaign_actions";
import { getCampaignCharacters, editCharacter } from "../../actions/character_actions";

const mapStateToProps = state => {
	debugger
	return {
		characters: state.campaign.characters,
		currentUser: state.session.user,
		campaign: state.campaign
	}
};

const mapDispatchToProps = dispatch => ({
	getCampaignCharacters: charIds => dispatch(getCampaignCharacters(charIds)),
	getCampaign: campId => dispatch(getCampaign(campId)),
	editCharacter: (character) => dispatch(editCharacter(character)),
	leaveCampaign: (id, charId) => dispatch(leaveCampaign(id, charId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CampaignRoom);
