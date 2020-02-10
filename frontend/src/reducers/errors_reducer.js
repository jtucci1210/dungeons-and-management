import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import CharacterErrorsReducer from './character_errors_reducer';
import CampaignErrorsReducer from './campaign_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    character: CharacterErrorsReducer,
    campaign: CampaignErrorsReducer
});