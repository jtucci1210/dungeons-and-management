import * as CampaignUtil from '../util/campaign_util';

export const JOIN_CAMPAIGN = 'JOIN_CAMPAIGN'

const receiveCampaign = (campaign) => {
    return {
        type: JOIN_CAMPAIGN,
        campaign
    }
}

export const joinCampaign = (id, charId) => dispatch => {
    return CampaignUtil.join(id, charId)
        .then(campaign => dispatch(receiveCampaign(campaign)))
}