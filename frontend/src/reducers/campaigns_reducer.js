import { RECEIVE_CAMPAIGN } from "../actions/campaign_actions";
const campaignsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPAIGN:
      return action.campaign.data.campaign;
    default:
      return state;
  }
};
export default campaignsReducer;
