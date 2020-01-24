import * as CampaignUtil from '../util/campaign_util';

export const JOIN_CAMPAIGN = 'JOIN_CAMPAIGN'

const receiveCampaign = (campaign) => {
    type: JOIN_CAMPAIGN,
    campaign
}

export const joinCampaign = (char) => dispatch => {
    return CampaignUtil.join(char)
        .then(campaign => dispatch(receiveCampaign(campaign)))
}