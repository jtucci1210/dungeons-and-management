import { connect } from 'react-redux';
import CampaignRoom from './campaign';
import { joinCampaign } from '../../actions/campaign_actions'

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    joinCampaign: (character) => dispatch(joinCampaign(character))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CampaignRoom);