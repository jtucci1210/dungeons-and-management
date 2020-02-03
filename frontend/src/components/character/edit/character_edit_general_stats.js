import React from 'react';
import '../../../stylesheet/show_page.css'
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
import { Link } from 'react-router-dom';


class EditGeneralStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.props, loaded: false }
        this.healthManagement = this.healthManagement.bind(this)
        this.showSkillMod = this.showSkillMod.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.addOrRemoveLevel = this.addOrRemoveLevel.bind(this)
        this.changeArmor = this.changeArmor.bind(this)
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

    showSkillMod(skill, stat, prof) {
        const characterSkills = this.props.character.skills
        const characterClass = this.props.character.charClass
        const fullClass = classUtil.fullClass
        const classInfo = fullClass[characterClass].savingThrows

        if (characterSkills.includes(skill.toLowerCase())) {
            return math.mod(stat, prof)
        } else {
            return math.mod(stat)
        }
    }

    myFunction() {
        const armor_list = document.getElementsByClassName("change-armor")[0]
        armor_list.classList.toggle("armor-list")
    }

    changeArmor(e) {
        let newArmor
        if (this.state.armorType.includes("none")) {
            newArmor = "noArmor"
        } else if (this.state.armorType === "padded (light)") {
            newArmor = "padded"
        } else if (this.state.armorType === "leather (light)") {
            newArmor = "leather"
        } else if (this.state.armorType === "studded leather (light)") {
            newArmor = "studdedLeather"
        } else if (this.state.armorType === "hide (medium)") {
            newArmor = "hide"
        } else if (this.state.armorType === "chain shirt (medium)") {
            newArmor = "chainShirt"
        } else if (this.state.armorType === "scale mail (medium)") {
            newArmor = "scaleMail"
        } else if (this.state.armorType === "breastplate (medium)") {
            newArmor = "breastplate"
        } else if (this.state.armorType === "half plate (medium)") {
            newArmor = "halfPlate"
        } else if (this.state.armorType === "ring mail (heavy)") {
            newArmor = "ringMail"
        } else if (this.state.armorType === "chain mail (heavy)") {
            newArmor = "chainMail"
        } else if (this.state.armorType === "splint (heavy)") {
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
            debugger
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
            maxHp: this.props.character.maxHp,
            currentHp: this.props.character.currentHp,
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
            <div className='show-character-general-stats'>
                <div className="show-character-image-div">
                    <img className="show-character-image" src={cardImg}></img>
                </div>
                <div className="show-character-general-info">
                    <div className='show-character-general-race'>
                        <p className='show-character-general-race'>
                            Race:
                        </p>
                    <div className='show-character-general-race-info'>
                        {character.race}
                    </div>
                    </div>
                    <div className='show-character-general-lvl'>
                        <p className='show-character-general-level'>
                            Level:
                        </p>
                        <div className='show-character-general-level-info'>
                            <div>
                                {character.level}
                            </div>
                                <button onClick={(e) => this.addOrRemoveLevel(e)} name='increase'> Increase Level</button>
                                <button onClick={(e) => this.addOrRemoveLevel(e)} name='decrease'> Decrease Level</button>
                        </div>
                    </div>
                </div>
                <div className='show-character-general-class'>
                    <p className='show-character-general-race'>
                        Class:
                    </p>
                    <div className='show-character-general-class-info'>
                        {character.charClass}
                    </div>
                </div>
                <div className="show-character-general-hp">
                    <div className="show-character-general-hp">
                        Max Life: {this.healthManagement(hitDice)}
                    </div>
                    <div className="show-character-general-hp">
                        Current Life: {character.currentHp}
                    </div>
                    <div className="show-character-general-hp">
                        {character.level}d{hitDice}
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
                    <button 
                        className="armor_list" 
                        onClick={() => this.myFunction()}>Change Armor</button>
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
                        <button onClick={() =>this.changeArmor()}>Change Armor</button>
                    </div>
                </div>
                <Link to={`/api/characters/${this.props.character._id}`}>
                    <button>Save</button>
                </Link>
            </div>
        )
    }
}

export default EditGeneralStats