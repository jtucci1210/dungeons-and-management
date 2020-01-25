import {
   RECEIVE_CHARACTER,
   RECEIVE_ALL_CHARACTERS
} from '../actions/character_actions';



export default function (state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CHARACTER:
            return  Object.assign({},action.character); 
        case RECEIVE_ALL_CHARACTERS:
            return Object.assign({}, action.characters);
        default:
            return state;
    }
}
// example
// {
//     "id": "5e28927822d5dd01891a7618",
//         "userId": "5e2890208321d6fc98d5bc24",
//             "name": "Safar",
//                 "race": "Elf",
//                     "charClass": "Wizard",
//                         "armorType": "Light",
//                             "level": 1,
//                                 "maxHp": 10,
//                                     "currentHp": 10,
//                                         "abilities": "{}",
//                                             "skills": "{}",
//                                                 "dateCreated": "2020-01-22T18:20:40.503Z",
//                                                     "__v": 0
// }