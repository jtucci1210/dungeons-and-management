import axios from "axios";
export const join = (id, charId) => {
	return axios.patch(`/api/campaigns/${id}/join`, { id: charId });
};

export const leave = (id, charId) => {
	return axios.patch(`/api/campaigns/${id}/leave`, { id: charId });
};

export const create = () => {
	return axios.post(`/api/campaigns/create`);
};

export const getCampaign = (id) => {
	return axios.get(`/api/campaigns/${id}`)
}

export const fetchCampaignByKey = key => {
	return axios.post(`/api/campaigns/fetch`, { key: key });
};
