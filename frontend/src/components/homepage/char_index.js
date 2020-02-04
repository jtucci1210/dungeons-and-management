import React from 'react';
import CharIndexItem from './char_index_item';
import { Link } from "react-router-dom";


class CharIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index-characters">
        <Link to={`/characters/new`} className="home-page-create-character">
          <div className="home-page-create-character-text"> + </div>
        </Link>
        {this.props.characters.map((character, i) => (
          <Link
            key={i}
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