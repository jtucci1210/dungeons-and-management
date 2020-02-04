import React from 'react';
import { withRouter } from 'react-router-dom'
import '../../../stylesheet/show_page.css'
import '../../../stylesheet/test.css'
import GeneralStats from './character_general_stats';
import MainStats from './character_main_stats';
import splashImg from '../../splash/splash_image.jpg'




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
                        <button className="edit-delete-char-btn">Edit Character</button>
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