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
import * as race from '../../../util/race_util'
import * as armor from '../../../util/armor_util'
import * as classUtil from '../../../util/class_util'

class GeneralStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: this.props.characters,
            currentUser: this.props.session,
            // currentUserID: this.props.session.user.id,
            // race: this.props.characters.race,
            // charClass: this.props.characters.charClass,
            // armorType: this.props.characters.armorType,
            // level: this.props.characters.level,
            // maxHp: this.props.characters.maxHp,
            // currentHp: this.props.characters.currentHp,
        }
        this.healthManagement = this.healthManagement.bind(this)
        this.showSkillMod = this.showSkillMod.bind(this)

    }

    componentDidMount() {
        // const characterInfo = this.props.getCharacter(this.props.match.params.characterId)
        // this.props.getCharacter(this.props.match.params.characterId)
        // Promise.all([characterInfo]).then(() => this.setState({ loaded: true }))
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
                            {character.level}
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
                        {/* Max Life: {character.maxHp} */}
                    </div>
                    <div className="show-character-general-hp">
                        Current Life: {character.currentHp}
                    </div>
                    <div className="show-character-general-hp">
                        {character.level}d{hitDice}
                    </div>
                </div>
            </div>
        )
    }
}

export default GeneralStats