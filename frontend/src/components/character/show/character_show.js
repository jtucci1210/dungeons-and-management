import React from 'react';
import { withRouter } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'
import GeneralStats from './character_general_stats';
import MainStats from './character_main_stats';
import Items from './character_item_page'
import {fullClass} from '../../../util/class_util'


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
    }


    render() {
        if (this.state.loaded) {
            const character = this.props.character
            return (
                <div className='show-character-box'>
                    <div className='show-character-header'>
                        <div className="show-character-name">
                            {character.name}
                        </div>
                        <div className="show-character-hp">
                            <div className="show-character-current-hp">
                                Max Life: {character.maxHp}
                            </div>
                            <div className="show-character-current-hp">
                                Current Life: {character.currentHp}
                            </div>
                            <div className="show-character-current-hp">
                                {character.level}d
                            </div>
                        </div>
                    </div>
                    <div className='show-character-page'>
                        <div>
                            <GeneralStats character={character}/>
                        </div>
                        <MainStats character={character} />
                    </div>
                    <div>
                        {/* <Items character={character}/> */}
                    </div>
                </div>
            )
        } else {
            return (<div className='test'>Loading</div>)
        }
    }


}

export default withRouter(CharacterShowPage)