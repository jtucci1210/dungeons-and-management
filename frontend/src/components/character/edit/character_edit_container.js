
import { connect } from 'react-redux';
import CharacterEditPage from './character_edit'
import { getCharacter, editCharacter } from '../../../actions/character_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    return ({
        character: state.characters
    })
};

const mapDispatchToProps = dispatch => ({
    getCharacter: characterId => dispatch(getCharacter(characterId)),
    editCharacter: data => dispatch(editCharacter(data))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterEditPage));