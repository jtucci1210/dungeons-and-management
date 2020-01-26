
import { connect } from 'react-redux';
import CharacterEditPage from './character_edit'
import { getCharacter, editCharacter } from '../../../actions/character_actions';
import { withRouter } from 'react-router-dom';
import GeneralStats from './character_edit_general_stats';


const mapStateToProps = state => {
    return ({
        character: state.characters,
        currentUser: state.session,
        currentUserID: state.session.user.id,
        name: state.characters.name,
        race: state.characters.race,
        charClass: state.characters.charClass,
        armorType: state.characters.armorType,
        level: state.characters.level,
        maxHp: state.characters.maxHp,
        currentHp: state.characters.currentHp,
        dateCreated: state.characters.dateCreated
    })
};

const mapDispatchToProps = dispatch => ({
    getCharacter: characterId => dispatch(getCharacter(characterId)),
    editCharacter: data => dispatch(editCharacter(data))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(GeneralStats));