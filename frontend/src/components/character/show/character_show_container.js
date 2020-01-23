
import { connect } from 'react-redux';
import CharacterShowPage from './character_show';
import { getCharacter } from '../../../actions/character_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
    console.log(state)
    // debugger
    return ({
    character: state.session.character
    })
};

const mapDispatchToProps = dispatch => ({
    getCharacter: characterId => dispatch(getCharacter(characterId))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterShowPage));