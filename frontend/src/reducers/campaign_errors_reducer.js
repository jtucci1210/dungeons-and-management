import { RECEIVE_CAMPAIGN_ERRORS, RECEIVE_CAMPAIGN } from '../actions/character_actions';

const _nullErrors = [];

const CampaignErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CAMPAIGN_ERRORS:
            return Object.values(action.errors);
        case RECEIVE_CAMPAIGN:
            return _nullErrors;
        default:
            return state;
    }
};

export default CampaignErrorsReducer;