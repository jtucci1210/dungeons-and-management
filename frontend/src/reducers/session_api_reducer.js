import {
    RECEIVE_CURRENT_USER,
    RECEIVE_USER_LOGOUT,
    RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger;
            return {
                // return Object.assign({}, state, { 
                //     [action.currentUser.id]: action.currentUser,
                //  [action.isAuthenticated]: !!action.currentUser,
                //  [action.email]: action.email,
                //  [action.username]: action.username,
                
                // });
                ...state,
                isAuthenticated: !!action.currentUser,
                email: action.email,
                username: action.username
            };
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: undefined
            };
        case RECEIVE_USER_SIGN_IN:
            return {
                ...state,
                isSignedIn: true
            }
        default:
            return state;
    }
}