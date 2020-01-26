
import errors from './errors_reducer'
import { combineReducers } from 'redux';
import session from './session_api_reducer';
import ui from './ui_reducer'
import characters from './characters_reducer'
import campaign from './campaigns_reducer'

const RootReducer = combineReducers({
    session,
    errors,
    ui,
    characters,
    campaign
});

export default RootReducer;