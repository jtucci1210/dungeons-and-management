import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'
import GeneralStats from './character_general_stats';
import MainStats from './character_main_stats';
import * as classUtil from '../../../util/class_util'
import splashImg from '../../splash/splash_image.jpg'




class CharacterShowPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    componentDidMount() {
       const characterInfo = this.props.getCharacter(this.props.match.params.characterId)
        // this.props.getCharacter(this.props.match.params.characterId)
        Promise.all([characterInfo]).then(() => this.setState({ loaded: true }))
    }


    

    render() {

        if (this.state.loaded) {
            const character = this.props.character
            const fullClass = classUtil.fullClass
            const hitDice = fullClass[character.charClass].hitDice
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
                        <button className="edit-delete-char-btn">Delete Character</button>
                    </div>
                  </div>
                  <div className="all-stats">
                    <GeneralStats character={character} />
                    <MainStats character={character} />
                  </div>
                </div>
                <div>{/* <Items character={character}/> */}</div>
              </div>
            </div>
            );
        } else {
            return (<div className='test'>Loading</div>)
        }
    }


}

export default withRouter(CharacterShowPage)