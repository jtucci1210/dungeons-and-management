import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/loading_page.css'
import GeneralStats from './character_general_stats';
import MainStats from './character_main_stats';
import * as classUtil from '../../../util/class_util'
import splashImg from '../../splash/splash_image.jpg'
import '../../../stylesheet/stat_roller.css';




class CharacterShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
      const characterInfo = this.props.currentChar || this.props.getCharacter(this.props.match.params.characterId)
      Promise.all([characterInfo]).then(() => this.setState({ loaded: true }))
    }

    deleteChar() {
      const characterId = this.props.character._id
      const userId = this.props.character.userId
      const allChars = this.props.getCharacters
      this.props.deleteCharacter(characterId).then(allChars(userId))
    }
    

    render() {

        if (this.state.loaded) {
            const character = this.props.currentChar || this.props.character
           
            return (
            <div className="main-page-background-img">
              <img src={splashImg} alt="background" className="splash-image" />
              <div className="show-character-page">
                <div className="show-character-box">
                  <div className="show-character-header">
                    <div className="show-character-name">{character.name}</div>
                    <div className="edit-delete-char">
                    <Link
                        to={`/characters/edit/${character._id}`}
                        className="edit-character-link"
                    >
                        <button className="edit-delete-char-btn">Edit Character</button>
                    </Link>
                        <Link to={`/home`}>
                          <button className="edit-delete-char-btn" onClick={() => this.deleteChar()}>Delete Character</button> </Link>
                    </div>
                  </div>
                  <div className="all-stats">
                    <GeneralStats character={character} />
                    <MainStats character={character} />
                  </div>
                </div>
              </div>
            </div>
            );
        } else {
          return (<div className="loading-page">
                    <img src={splashImg} alt="background" className="splash-image" />
                    <div className="loading-sections">
                        <div>
                          <i id="loading-die" className="fas fa-dice-six fa-spin"></i>
                        </div>
                        <div className="loading-message">Loading - If longer than 1 min, please refresh the page.</div>
                    </div>
                  </div>)
          // return (<div><img src={splashImg} alt="background" className="splash-image" /><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
        }
    }


}

export default withRouter(CharacterShowPage)