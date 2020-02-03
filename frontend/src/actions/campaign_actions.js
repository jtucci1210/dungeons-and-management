import * as CampaignUtil from "../util/campaign_util";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";

const receiveCampaign = payload => {

  return {
    type: RECEIVE_CAMPAIGN,
    campaign: payload.data.campaign,
    characters: payload.data.characters
  };
};

//Response is not needed so we don't need a thunk action
export const leaveCampaign = (id, charId) => {
  CampaignUtil.leave(id, charId)
}


export const getCampaign = (id) => dispatch => {
  return CampaignUtil.getCampaign(id).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

export const createCampaign = () => dispatch => {
  return CampaignUtil.create().then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

//Fetches campaign and add charId to that campaign
export const fetchCampaignByKey = (campRoom, charId) => dispatch => {
  return CampaignUtil.fetchCampaignByKey(campRoom, charId).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
}
