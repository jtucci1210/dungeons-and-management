import * as CHARAPIUTIL from '../util/character_util';


export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";
export const RECEIVE_CHARACTER_ERRORS = "RECEIVE_CHARACTER_ERRORS";
export const RECEIVE_ALL_CHARACTERS = "RECEIVE_ALL_CHARACTERS";


export const receiveCharacter = character => ({
    type: RECEIVE_CHARACTER,
    character
})
export const receiveCharacterErrors = errors => ({
    type: RECEIVE_CHARACTER_ERRORS,
    errors
})
export const receiveAllCharacters = () => ({
    type: RECEIVE_CHARACTER,
})

export const retrieveCharacter = characterId => dispatch => (
    CHARAPIUTIL.receiveCharacter(characterId)
        .then(character => dispatch(receiveCharacter(character)))
)
export const retrieveCharacters = () => dispatch => (
    CHARAPIUTIL.receiveCharacters()
        .then(characters => dispatch(receiveAllCharacters(characters)))
)
// export const retrieveErrors = characterId => dispatch => (
//     CHARAPIUTIL.receiveCharacter(characterId)
//         .then(character => dispatch(receiveCharacter(character)))
// )

