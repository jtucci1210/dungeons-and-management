import {
   RECEIVE_CHARACTER,
   RECEIVE_ALL_CHARACTERS
} from '../actions/character_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    debugger
    switch (action.type) {
        case RECEIVE_CHARACTER:
            return Object.assign({}, { [action.name]: action.book })
        case RECEIVE_ALL_CHARACTERS:
            return {}
        default:
            return state;
    }
}