import React from 'react';
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/character_edit_form.css'
import ElfImg from "./races/elf.jpg";
import DragonImg from "./races/dragon-born.jpg";
import DwarfImg from "./races/dwarf.jpg";
import GnomeImg from "./races/gnome.jpg";
import HalfElfImg from "./races/half-elf.jpg";
import HalfOrcImg from "./races/half-orc.jpg";
import HalflingImg from "./races/halfling.jpg";
import HumanImg from "./races/human.jpg";
import TieflingImg from "./races/tiefling.jpg";
import * as math from '../../../util/game_math_util'
import * as armor from '../../../util/armor_util'
import * as classUtil from '../../../util/class_util'


class EditGeneralStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.props, loaded: false, newHealth: "" }
        this.healthManagement = this.healthManagement.bind(this)
        this.showSkillMod = this.showSkillMod.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.addOrRemoveLevel = this.addOrRemoveLevel.bind(this)
        this.changeArmor = this.changeArmor.bind(this)
        this.updateHealth = this.updateHealth.bind(this)
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


    handleNext() {
        this.setState(
            { nextClicked: true }
        )
    }

    healthManagement(hitDice, changeLevel) {
        const character = this.props.character
        const constitutionMod = math.mod(character.abilities.constitution)
        const characterClass = this.props.character.charClass
        const fullClass = classUtil.fullClass
        let level
        changeLevel ? level = changeLevel : level = character.level
        const avgHealth = fullClass[characterClass].avgHealth
        const levelingUp = math.healthLevelUp(hitDice, constitutionMod, level, avgHealth)
        return (
            levelingUp
        )
    }

    updateHealth() {
        let health = this.state.newHealth
        const character = this.props.character
        const fullClass = classUtil.fullClass
        const hitDice = fullClass[character.charClass].hitDice
        let characterObj = {
            _id: character._id,
            userId: this.state.currentUserID,
            name: character.name,
            race: character.race,
            charClass: character.charClass,
            armorType: character.armorType,
            level: character.level,
            maxHp: this.healthManagement(hitDice),
            currentHp: Math.round(health),
            abilities: character.abilities,
            skills: character.skills,
            dateCreated: character.dateCreated
        };

        if (health < character.maxHp && health > 0 && health !== characterObj.currentHp && characterObj.currentHp !== "") {
            this.props.editCharacter(characterObj)
            health = ""
            this.setState({ newHealth: '' })
            window.location.reload()
        }

        
        

    }

    fullHealth() {
        const character = this.props.character
        const fullClass = classUtil.fullClass
        const hitDice = fullClass[character.charClass].hitDice
        let characterObj = {
            _id: character._id,
            userId: this.state.currentUserID,
            name: character.name,
            race: character.race,
            charClass: character.charClass,
            armorType: character.armorType,
            level: character.level,
            maxHp: this.healthManagement(hitDice),
            currentHp: this.healthManagement(hitDice),
            abilities: character.abilities,
            skills: character.skills,
            dateCreated: character.dateCreated

        };
        if (characterObj.currentHp <= character.maxHp && characterObj.currentHp >= 0 && character.currentHp !== characterObj.currentHp && characterObj.currentHp !== "") {
            this.props.editCharacter(characterObj)
            this.state.newHealth = ""
            window.location.reload()
        }
    }

    showSkillMod(skill, stat, prof) {
        const characterSkills = this.props.character.skills

        if (characterSkills.includes(skill.toLowerCase())) {
            return math.mod(stat, prof)
        } else {
            return math.mod(stat)
        }
    } 

    changeArmor() {
        let newArmor
        let armorCheck
        (this.state.armorType) ? armorCheck = this.state.armorType : armorCheck = "none"
        if (armorCheck === "none") {
            newArmor = "noArmor"
        } else if (armorCheck === "padded (light)") {
            newArmor = "padded"
        } else if (armorCheck === "leather (light)") {
            newArmor = "leather"
        } else if (armorCheck === "studded leather (light)") {
            newArmor = "studdedLeather"
        } else if (armorCheck === "hide (medium)") {
            newArmor = "hide"
        } else if (armorCheck === "chain shirt (medium)") {
            newArmor = "chainShirt"
        } else if (armorCheck === "scale mail (medium)") {
            newArmor = "scaleMail"
        } else if (armorCheck === "breastplate (medium)") {
            newArmor = "breastplate"
        } else if (armorCheck === "half plate (medium)") {
            newArmor = "halfPlate"
        } else if (armorCheck === "ring mail (heavy)") {
            newArmor = "ringMail"
        } else if (armorCheck === "chain mail (heavy)") {
            newArmor = "chainMail"
        } else if (armorCheck === "splint (heavy)") {
            newArmor = "splint"
        } else {
            newArmor = "plate"
        }
        
        let characterObj = {
            _id: this.props.character._id,
            user: this.state.currentUserID,
            name: this.props.character.name,
            race: this.props.character.race,
            charClass: this.props.character.charClass,
            armorType: newArmor,
            level: this.props.character.level,
            maxHp: this.props.character.maxHp,
            currentHp: this.props.character.currentHp,
            abilities: this.props.character.abilities,
            skills: this.props.character.skills,
            dateCreated: this.props.character.dateCreated

        };
        if (characterObj.armorType !== this.props.character.armorType) {
            this.props.editCharacter(characterObj)
        }
    }


    charImage() {
        const { character } = this.props;
        const race = character.race;
        switch (race) {
            case "woodElf":
                return ElfImg;
            case "highElf":
                return ElfImg;
            case "darkElf":
                return ElfImg;
            case "dragonborn":
                return DragonImg;
            case "hillDwarf":
                return DwarfImg;
            case "mountainDwarf":
                return DwarfImg;
            case "rockGnome":
                return GnomeImg;
            case "forestGnome":
                return GnomeImg;
            case "halfelf":
                return HalfElfImg;
            case "halforc":
                return HalfOrcImg;
            case "lightfootHalfling":
                return HalflingImg;
            case "stoutHalfling":
                return HalflingImg;
            case "human":
                return HumanImg;
            case "tiefling":
                return TieflingImg;
            default:
                return "meow";
        }
    }

    addOrRemoveLevel(e) {
        const value = e.target.name
        let newLevel = this.props.character.level
        const character = this.props.character
        const fullClass = classUtil.fullClass
        const hitDice = fullClass[character.charClass].hitDice
        if (value === 'decrease' && newLevel > 1) {
            newLevel = newLevel - 1
        } else if (value === 'increase' && newLevel < 20) {
            newLevel = newLevel + 1
        }
        let characterObj = {
            _id: this.props.character._id,
            user: this.state.currentUserID,
            name: this.props.character.name,
            race: this.props.character.race,
            charClass: this.props.character.charClass,
            armorType: this.props.character.armorType,
            level: newLevel,
            maxHp: this.healthManagement(hitDice),
            currentHp: this.healthManagement(hitDice, newLevel),
            abilities: this.props.character.abilities,
            skills: this.props.character.skills,
            dateCreated: this.props.character.dateCreated

        };
        if (newLevel !== this.props.character.level) {
            this.props.editCharacter(characterObj)
        }
    }


    render() {
        const character = this.props.character
        const cardImg = this.charImage();
        const fullClass = classUtil.fullClass
        const hitDice = fullClass[character.charClass].hitDice

        return (
            <div className='character-general-stats'>
                <div className="show-character-image-div">
                    <img alt="character" className="show-character-image" src={cardImg}></img>
                </div>
                <div className="show-character-general-info">
                    <div className="show-character-general">
                        <div className="show-character-general-race">Race:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-race-info">
                            {character.race}
                        </div>
                    </div>
                    <div className="show-character-general">
                        <div className="show-character-general-class">Class:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-class-info">
                            {character.charClass}
                        </div>
                    </div>
                    <div className="show-character-general">
                        <div className="show-character-general-maxhp">Max Health:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-maxhp-info">
                            {this.healthManagement(hitDice)}
                        </div>
                    </div>
                    <div className="show-character-general">
                        <div className="show-character-general-currhp">Current Health:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-currhp-info">
                            {character.currentHp}
                        </div>
                        
                    </div>
                    <div className="update-health">
                        <form className="show-character-general-updatehp">
                            <input type="integer"
                                className="update-health-bar"
                                placeholder="Update Health"
                                value={this.state.currentHp}
                                onChange={health => this.setState({
                                    newHealth: health.target.value
                                })}
                            />
                            <button className="update-armor-btn" onClick={() => this.updateHealth()}>Update Health</button>
                            <button className="update-armor-btn" onClick={() => this.fullHealth()}>Full Health</button>
                        </form>
                    </div>
                    <div className="show-character-general">
                        <div className="show-character-general-hd">Hit Dice:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-hd-info">
                            {character.level}d{hitDice}
                        </div>
                    </div>
                    <div className="show-character-general">
                        <div className="show-character-general-level">Level:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-level-info">
                            {character.level}
                        </div>
                    </div>
                    <div className="level-up-down-btns-div">
                        <button className="level-up-dwn-btn" onClick={(e) => this.addOrRemoveLevel(e)} name='increase'> Increase Level</button>
                        <button className="level-up-dwn-btn" onClick={(e) => this.addOrRemoveLevel(e)} name='decrease'> Decrease Level</button>
                    </div>
                    <div className="show-character-general">
                        <div className="show-character-general-level">Armor:</div>
                        <div className="imma-blank-space"> </div>
                        <div className="show-character-general-level-info">
                            {character.armorType}
                        </div>
                    </div>
                </div>
                <div className="armor">
                    <div className="change-armor">
                        <select
                            className="armor-list-selector"
                            onChange={armor => this.setState({
                                armorType: armor.target.value
                            })}>
                            <option value="Change Armor" disabled={true}>
                                Current: {this.props.character.armorType}
                            </option>
                            {armor.armorTypes.map((armorItem, i) => (
                                <option key={i} value={armor.fullArmor[i]}>{armorItem}</option>
                            ))}
                        </select>
                        <button className="update-armor-btn" onClick={() =>this.changeArmor()}>Update Armor</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditGeneralStats