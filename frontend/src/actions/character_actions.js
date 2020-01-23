import * as CHARACTERAPIUTIL from '../util/character_util';


export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";
export const RECEIVE_CHARACTER_ERRORS = "RECEIVE_CHARACTER_ERRORS";
export const RECEIVE_ALL_CHARACTERS = "RECEIVE_ALL_CHARACTERS";

//
export const receiveCharacter = character => ({
    type: RECEIVE_CHARACTER,
    character
})
export const receiveCharacterErrors = errors => ({
    type: RECEIVE_CHARACTER_ERRORS,
    errors
})

//Safar's user id: 5e2890208321d6fc98d5bc24
export const receiveAllCharacters = () => ({
    type: RECEIVE_CHARACTER,
})

export const getCharacter = characterId => dispatch => {
   return ( 
       CHARACTERAPIUTIL.getCharacter(characterId)
        .then(character => dispatch(receiveCharacter(character)))
   )
}
export const getCharacters = () => dispatch => (
    CHARACTERAPIUTIL.getCharacters()
        .then(characters => dispatch(receiveAllCharacters(characters)))
)
export const editCharacter = () => dispatch => (
    CHARACTERAPIUTIL.editCharacter()
        .then(character => dispatch(receiveCharacter(character)))
)
export const createCharacter = () => dispatch => (
    CHARACTERAPIUTIL.createCharacter()
        .then(character => dispatch(receiveAllCharacters(character)))
)


