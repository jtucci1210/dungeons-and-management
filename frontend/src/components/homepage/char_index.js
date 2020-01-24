import React from 'react';
import CharIndexItem from './char_index_item';
import { Link } from "react-router-dom";


class CharIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
    const characters = [
            { _id:"5e28927822d5dd01891a7618",name: 'character1', race: 'woodElf', currentHealth: 10, health: 20, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'tiefling', currentHealth: 10, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'hillDwarf', currentHealth: 20, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'halforc', currentHealth: 15, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'halfelf', currentHealth: 12, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'human', currentHealth: 30, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'stoutHalfling', currentHealth: 11, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'forestGnome', currentHealth: 10, health: 40, class: 'rogue' },
            { _id:"5e28927822d5dd01891a7618",name: 'character2', race: 'dragonborn', currentHealth: 10, health: 40, class: 'rogue' },
    ];
        return (
          <div className="index-characters">
            <Link to={`/characters/new`} className="home-page-create-character">
              <div className="home-page-create-character-text"> + </div>
            </Link>
            {characters.map((character, i) => (
                <Link
                  to={`/characters/${character._id}`}
                  className="home-characters-link"
                >
                    <CharIndexItem character={character} />
                </Link>
            ))}
          </div>
        );
    }
}

export default CharIndex;