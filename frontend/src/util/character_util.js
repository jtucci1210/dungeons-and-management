import axios from 'axios';
// Safar's user id: 5e2890208321d6fc98d5bc24
// Safar Elf Character ID: 5e28927822d5dd01891a7618


export const getCharacter = (characterId) => {
    return axios.get(`/api/characters/${characterId}`);
};

export const getCharacters = (currentUserID) => {
    return axios.get(`/api/characters/user/${currentUserID}`);
};

export const editCharacter = (characterData) => {
    return axios.patch(`/api/characters/${characterData._id}/edit`, characterData)
}
export const createCharacter = (characterData) => {
    return axios.post(`/api/characters/create`, characterData)
} 

export const getCampaignCharacters = (charIds) => {
    return axios.post(`/api/characters/campaign`, charIds)
}