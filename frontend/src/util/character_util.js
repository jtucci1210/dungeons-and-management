import axios from 'axios';
// Safar's user id: 5e2890208321d6fc98d5bc24


export const getCharacter = (characterId) => {
    return axios.get(`/api/characters/${characterId}`);
};

export const getCharacters = () => {
    return axios.get(`/api/characters/`);
};

export const editCharacter = (characterId, characterData) => {
    return axios.patch(`/api/characters/${characterId}/edit`, characterData)
}
export const createCharacter = (characterData) => {
    return axios.post(`/api/characters/create`, characterData)
}