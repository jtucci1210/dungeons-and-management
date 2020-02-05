import { RECEIVE_CHARACTER_ERRORS, RECEIVE_CHARACTER } from '../actions/character_actions';

const _nullErrors = [];

const CharacterErrorsReducer = (state = _nullErrors, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHARACTER_ERRORS:
            return Object.values(action.errors);
        case RECEIVE_CHARACTER:
            return _nullErrors;
        default:
            return state;
    }
};

export default CharacterErrorsReducer;