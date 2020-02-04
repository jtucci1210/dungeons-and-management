import React from 'react';
import { withRouter, Link } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/loading_page.css'
import EditGeneralStats from './character_edit_general_stats';
import EditMainStats from './character_edit_main_stats';
import * as math from '../../../util/game_math_util'
import * as classUtil from '../../../util/class_util'
import splashImg from '../../splash/splash_image.jpg';




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

        if (this.state.loaded) {
            const editCharacter = this.props.editCharacter
            const character = this.props.character
            const fullClass = classUtil.fullClass
            const hitDice = fullClass[character.charClass].hitDice
            return (
            <div className="main-page-background-img">
                <img src={splashImg} alt="background" className="splash-image" />
                <div className='show-character-page'>
                    <div className='show-character-box'>
                        <div className='show-character-header'>
                            <div className="show-character-name">
                                {character.name}
                            </div>
                        </div>
                        <div className="all-stats">
                            <EditGeneralStats character={character} editCharacter={editCharacter} currentUserID={this.props.currentUserID}/>
                            <EditMainStats character={character} editCharacter={editCharacter} currentUserID={this.props.currentUserID} />
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return (<div className="loading-page">
                <img src={splashImg} alt="background" className="splash-image" />
                <div className="loading-sections">
                    {/* <div className="loading">Loading</div> */}
                    {/* <div id="height"> */}
                    <i id="loading-die" className="fas fa-dice-six fa-spin"></i>

                    {/* </div> */}
                    <div className="loading-message">Loading - If longer than 1 min, please refresh the page.</div>
                </div>
            </div>)
        }
    }


}

export default withRouter(CharacterEditPage)