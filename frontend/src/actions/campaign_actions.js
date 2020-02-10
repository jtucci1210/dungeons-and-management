import * as CampaignUtil from "../util/campaign_util";
import { RECEIVE_CHARACTER_ERRORS } from "./character_actions";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";
export const RECEIVE_CAMPAIGN_ERRORS = "RECEIVE_CAMPAIGN_ERRORS";

const receiveCampaign = payload => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign: payload.data.campaign,
    characters: payload.data.characters,
    churrentCharId: payload.data.churrentCharId
  };
};

const receiveCampaignErrors = errors => ({
  type: RECEIVE_CHARACTER_ERRORS,
  errors
});

export const getCampaign = (id) => dispatch => {
  return CampaignUtil.getCampaign(id).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

export const createCampaign = () => dispatch => {
  return CampaignUtil.create().then(campaign =>
    dispatch(receiveCampaign(campaign))
  )
  .catch(err => (
    dispatch(receiveCampaignErrors(err.response.data))
  ));
};

//Fetches campaign and add charId to that campaign
export const fetchCampaignByKey = (campRoom, charId) => dispatch => {
  return CampaignUtil.fetchCampaignByKey(campRoom, charId).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
}

//Made this a thunk so leaving a room does not cause errors for rerender
export const leaveCampaign = (id, charId) => dispatch => {
  return CampaignUtil.leave(id, charId).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
}
