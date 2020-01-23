import React from 'react';
import { withRouter } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'




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

    render() {
        if (this.state.loaded) {
            const character = this.props.character
            return (
                <div className='show-character-page'>
                    <div className="test">
                        {character.name}
                    </div>
                    <div className="show-character-hit-dice">
                        Hit Dice Box
                    </div>
                    <div className='show-character-general-stats'>
                        <img></img>
                        <div className='show-character-general-race'>
                            <p className='show-character-general-race'>
                                Race:
                            </p>
                            <div className='show-character-general-race'>
                                {character.race}
                            </div>
                        </div>
                        <div className='show-character-general-lvl'>
                            <p className='show-character-general-race'>
                                Level:
                            </p>
                            <div className='show-character-general-level'>
                                {character.level}
                            </div>
                        </div>
                        <div className='show-character-general-class'>
                            <p className='show-character-general-race'>
                                Class:
                            </p>
                            <div className='show-character-general-class'>
                                {character.class}
                            </div>
                        </div>
                    </div>

                </div>
            )
        } else {
            return (<div className='test'>Loading</div>)
        }
    }


}

export default withRouter(CharacterShowPage)