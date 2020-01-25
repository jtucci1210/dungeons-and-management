import axios from "axios";
export const join = (id, charId) => {
    return axios.patch(`/api/campaigns/${id}/join`, { id: charId });
};
export const create = () => {
    return axios.post(`/api/campaigns/create`);
};
