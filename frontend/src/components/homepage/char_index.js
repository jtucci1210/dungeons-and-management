import React from 'react';
import CharIndexItem from './char_index_item';
import { Link } from "react-router-dom";


class CharIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
    const characters = [
            { name: 'character1', race: 'woodElf', currentHealth: 10, health: 20, class: 'rogue' },
            { name: 'character2', race: 'tiefling', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'hillDwarf', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'halforc', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'halfelf', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'human', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'stoutHalfling', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'forestGnome', currentHealth: 10, health: 40, class: 'rogue' },
            { name: 'character2', race: 'dragonborn', currentHealth: 10, health: 40, class: 'rogue' },
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