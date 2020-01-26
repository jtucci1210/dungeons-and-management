import React from 'react';
import '../../../stylesheet/show_page.css'
import * as math from '../../../util/game_math_util'
import ElfImg from "./races/elf.jpg";
import DragonImg from "./races/dragon-born.jpg";
import DwarfImg from "./races/dwarf.jpg";
import GnomeImg from "./races/gnome.jpg";
import HalfElfImg from "./races/half-elf.jpg";
import HalfOrcImg from "./races/half-orc.jpg";
import HalflingImg from "./races/halfling.jpg";
import HumanImg from "./races/human.jpg";
import TieflingImg from "./races/tiefling.jpg";
import * as charClass from '../../../util/class_util'

class GeneralStats extends React.Component {
    constructor(props) {
        super(props)
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
        const fullClass = charClass.fullClass
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
                    Max Life: {character.maxHp}
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