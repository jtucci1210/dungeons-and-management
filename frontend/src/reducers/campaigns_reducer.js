import { RECEIVE_CAMPAIGN } from "../actions/campaign_actions";
const campaignsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CAMPAIGN:
            const { campaign } = action
            return {
                _id: campaign._id,
                campKey: campaign.campKey,
                characters: action.characters,
                currentCharId: campaign.currentCharId
            }
        default:
            return state;
    }
};

export default campaignsReducer;
