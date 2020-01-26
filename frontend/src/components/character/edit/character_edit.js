import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'
import GeneralStats from './character_edit_general_stats';
import MainStats from './character_edit_main_stats';
import * as math from '../../../util/game_math_util'
import * as race from '../../../util/race_util'
import * as armor from '../../../util/armor_util'
import * as classUtil from '../../../util/class_util'



class CharacterEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
        this.state = { ...this.props }
    }

    componentDidMount() {
       const characterInfo = this.props.getCharacter(this.props.match.params.characterId)
        // this.props.getCharacter(this.props.match.params.characterId)
        Promise.all([characterInfo]).then(() => this.setState({ loaded: true }))
    }

    healthManagement(hitDice) {
        const character = this.props.character
        const constitutionMod = math.mod(character.abilities.constitution)
        const characterClass = this.props.character.charClass
        const fullClass = classUtil.fullClass
        const level = character.level
        const avgHealth = fullClass[characterClass].avgHealth
        const levelingUp = math.healthLevelUp(hitDice, constitutionMod, level, avgHealth)
        return (
            levelingUp
        )
    }

    

    render() {
        // debugger
        if (this.state.loaded) {
            const character = this.props.character
            const fullClass = classUtil.fullClass
            const hitDice = fullClass[character.charClass].hitDice
            return (
                <div className='show-character-box'>
                    <div className='show-character-header'>
                        <div className="show-character-name">
                            <Link
                                to={`/characters/${character._id}`}
                                className="edit-character-link"
                            >
                            {character.name}
                            </Link>
                        </div>
                        <div className="show-character-hp">
                            <div className="show-character-current-hp">
                                Max Life: {this.healthManagement(hitDice)}
                            </div>
                            <div className="show-character-current-hp">
                                Current Life: {character.currentHp}
                            </div>
                            <div className="show-character-current-hp">
                                {character.level}d{hitDice}
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

export default withRouter(CharacterEditPage)