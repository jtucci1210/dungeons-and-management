import React from 'react';
import { withRouter } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'
import GeneralStats from './character_main_stats';
import MainStats from './character_main_stats';




class CharacterShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
       const characterInfo = this.props.getCharacter(this.props.match.params.characterId)
        Promise.all([characterInfo]).then(() => this.setState({ loaded: true }))
        // this.props.getCharacter(this.props.match.params.characterId)
    }

    generalStates() {
        
    }

    render() {
        if (this.state.loaded) {
            const character = this.props.character
            return (
                <div className='show-character-page'>
                    <div className='show-character-header'>
                        <div className="show-character-name">
                            {character.name}
                        </div>
                        <div className="show-character-hit-dice">
                            Hit Dice Box
                        </div>
                    </div>
                    <GeneralStats character={character}/>
                    <MainStats character={character} />
                </div>
            )
        } else {
            return (<div className='test'>Loading</div>)
        }
    }


}

export default withRouter(CharacterShowPage)