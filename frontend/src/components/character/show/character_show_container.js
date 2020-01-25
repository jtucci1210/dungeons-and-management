
import { connect } from 'react-redux';
import CharacterShowPage from './character_show';
import { getCharacter } from '../../../actions/character_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    return ({
    character: state.characters
    })
};

const mapDispatchToProps = dispatch => ({
    getCharacter: characterId => dispatch(getCharacter(characterId))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterShowPage));