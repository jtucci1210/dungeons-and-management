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

  render() {
      const {character} = this.props;
      const cardImg = this.charImage();
    return (
      <div className="character-box">
        <div className="character-name-index">
          <h3>{character.name}</h3>
        </div>
        <div className="character-image-div">
          <img className="character-image" src={cardImg}></img>
        </div>
        <div className="character-image-index">
          <div className="character-image-health-index">
            MaxHealth (Current): {character.health}  ({character.currentHealth})
          </div>
        </div>
        <div className="character-race-index">
          <h3>Race: </h3> {character.race}
        </div>
        <div className="character-class-index">
          <h3>Class: </h3> {character.class}
        </div>
      </div>
    );
  }
}

export default CharIndexItem;