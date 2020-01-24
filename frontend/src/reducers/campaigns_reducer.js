import { JOIN_CAMPAIGN } from "../actions/campaign_actions"

const campaignsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case JOIN_CAMPAIGN:
            return action.campaign;
        default:
            return state;
    }
}

export default campaignsReducer