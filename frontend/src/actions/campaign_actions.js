import * as CampaignUtil from "../util/campaign_util";
export const RECEIVE_CAMPAIGN = "RECEIVE_CAMPAIGN";
const receiveCampaign = campaign => {
  return {
    type: RECEIVE_CAMPAIGN,
    campaign
  };
};
export const joinCampaign = (id, charId) => dispatch => {
  return CampaignUtil.join(id, charId).then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};

export const createCampaign = () => dispatch => {
  return CampaignUtil.create().then(campaign =>
    dispatch(receiveCampaign(campaign))
  );
};
