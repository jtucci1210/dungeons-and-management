
import { connect } from 'react-redux';
import CharacterShowPage from './character_show'
import { getCharacter, deleteCharacter, getCharacters } from '../../../actions/character_actions';
import { withRouter } from 'react-router-dom';




const mapStateToProps = state => {
    return ({
        character: state.characters
    })
};

const mapDispatchToProps = dispatch => ({
    getCharacter: characterId => dispatch(getCharacter(characterId)),
    deleteCharacter: characterId => dispatch(deleteCharacter(characterId)),
    getCharacters: userId => dispatch(getCharacters(userId)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterShowPage));