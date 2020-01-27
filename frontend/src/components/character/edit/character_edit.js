import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'
import EditGeneralStats from './character_edit_general_stats';
import EditMainStats from './character_edit_main_stats';
import * as math from '../../../util/game_math_util'
import * as race from '../../../util/race_util'
import * as armor from '../../../util/armor_util'
import * as classUtil from '../../../util/class_util'



class CharacterEditPage extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     loaded: false,
        // }
        this.state = { ...this.props, loaded: false }
        this.updateState = this.updateState.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    updateState(slice) {
        this.setState(slice)
    }


    handleChange(field) {
        return (e) => {
            this.setState(
                { [field]: e.target.value }
            )
        }
    }

    handleSubmit(e) {
        // e.preventDefault();
        let characterObj = {
            _id: this.props.character._id,
            user: this.state.currentUserID,
            name: this.state.name,
            race: this.props.race,
            charClass: this.props.charClass,
            armorType: this.props.armorType,
            level: this.props.level,
            maxHp: this.props.maxHp,
            currentHp: this.props.currentHp,
            abilities: this.props.character.abilities,
            skills: this.props.character.skills,
            dateCreated: this.props.dateCreated

        };

        this.props.editCharacter(characterObj).then(result => this.props.history.push(`/characters/${this.props.character._id}`))
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
            const editCharacter = this.props.editCharacter
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
                            {/* <input type="text" placeholder="character name" onChange={this.handleChange('name')} /> */}
                            <form onSubmit={this.handleSubmit} className='character-name-edit'>
                                <label>
                                    <input type='text'
                                        placeholder={character.name} 
                                        value={this.state.name}
                                        onChange={this.handleChange('name')}
                                        className='character-name-field'
                                        />
                                </label> 
                                <input className="edit-name-submit-button" type="submit" value={this.props.formType} />
                            </form>
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
                            <EditGeneralStats character={character} editCharacter={editCharacter} currentUserID={this.props.currentUserID}/>
                        </div>
                        <EditMainStats character={character} editCharacter={editCharacter} currentUserID={this.props.currentUserID} />
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