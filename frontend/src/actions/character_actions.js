import * as CHARACTERAPIUTIL from "../util/character_util";

export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";
export const RECEIVE_CHARACTER_ERRORS = "RECEIVE_CHARACTER_ERRORS";
export const RECEIVE_ALL_CHARACTERS = "RECEIVE_ALL_CHARACTERS";

//
export const receiveCharacter = character => {
	return {
		type: RECEIVE_CHARACTER,
		character
	};
};

export const receiveCharacterErrors = errors => ({
	type: RECEIVE_CHARACTER_ERRORS,
	errors
});

//Safar's user id: 5e2890208321d6fc98d5bc24
export const receiveAllCharacters = characters => {
	return {
		type: RECEIVE_ALL_CHARACTERS,
		characters
	}
};

export const getCharacter = characterId => dispatch => {
	return CHARACTERAPIUTIL.getCharacter(characterId).then(character =>
		dispatch(receiveCharacter(character.data))
	);
};
export const getCharacters = userId => dispatch =>
	CHARACTERAPIUTIL.getCharacters(userId).then(characters =>
		dispatch(receiveAllCharacters(characters.data))
	);
export const editCharacter = character => dispatch =>
	CHARACTERAPIUTIL.editCharacter(character).then(character =>
		dispatch(receiveCharacter(character.data))
	);

export const createCharacter = data => dispatch =>
	CHARACTERAPIUTIL.createCharacter(data).then(character =>
		dispatch(receiveCharacter(character.data))
	);

export const getCampaignCharacters = charIds => dispatch =>
		CHARACTERAPIUTIL.getCampaignCharacters(charIds).then( characters =>
			dispatch(receiveAllCharacters(characters.data)))
