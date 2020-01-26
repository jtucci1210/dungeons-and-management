import React from 'react';
import ElfImg from "./races/elf.jpg";
import DragonImg from "./races/dragon-born.jpg";
import DwarfImg from "./races/dwarf.jpg";
import GnomeImg from "./races/gnome.jpg";
import HalfElfImg from "./races/half-elf.jpg";
import HalfOrcImg from "./races/half-orc.jpg";
import HalflingImg from "./races/halfling.jpg";
import HumanImg from "./races/human.jpg";
import TieflingImg from "./races/tiefling.jpg";
import DeceasedImg from "./deceased.png";

class CharIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  charImage () {
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
  charHealth () {
      const { character } = this.props;
      let healthPct = character.currentHp / character.maxHp;
            if (healthPct < 0.3) {
      return (
          <span className="warning-health">{character.currentHp}</span>
      )} else {
          return (
            <span className="safe-health">{character.currentHp}</span>
          );
      }
  }

  render() {
      const {character} = this.props;
      const cardImg = this.charImage();
      const healthAmt = this.charHealth();
      const deceased = character.currentHp === 0 ? DeceasedImg : ""
   
    return (
      <div className="character-box">
        <div className="character-name-index">
          <h3>{character.name}</h3>
        </div>
        <div className="character-image-div">
          <img className='character-image' src={cardImg} alt=""></img>
          <img className='deceased-character-image' src={deceased} alt=""></img>
        </div>
        <div className="index-character-stats">
          <div className="character-image-health-index">
            <span className="field-title">MaxHealth (Current): </span>
            <div className="imma-blank-space"> </div>
            <span >
              {character.maxHp} ({healthAmt})
            </span>
          </div>
          <div className="character-race-index">
            <span className="field-title">Race:</span>
            <div className="imma-blank-space"> </div>
            <span>{character.race}</span>
          </div>
          <div className="character-class-index">
            <span className="field-title">Class:</span>
            <div className="imma-blank-space"> </div>
            <span>{character.charClass}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CharIndexItem;