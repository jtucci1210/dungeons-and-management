import * as CampaignUtil from "../util/campaign_util";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";

const receiveCampaign = payload => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign: payload.data.campaign,
    characters: payload.data.characters
  };
};

export const leaveCampaign = (id, charId) => {
  CampaignUtil.leave(id, charId)
}

export const joinCampaign = (id, charId) => dispatch => {
  return CampaignUtil.join(id, charId).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

export const getCampaign = (id) => dispatch => {
  return CampaignUtil.getCampaign(id).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

// export const leaveCampaign = (id, charId) => dispatch => {
//   return CampaignUtil.leave(id, charId).then(campaign =>
//     dispatch(receiveCampaign(campaign))
//   );
// };

export const createCampaign = () => dispatch => {
  return CampaignUtil.create().then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

export const fetchCampaignByKey = (campRoom, charId) => dispatch => {
  return CampaignUtil.fetchCampaignByKey(campRoom, charId).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
}
