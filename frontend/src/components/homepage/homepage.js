import React from 'react';
import '../../stylesheet/homepage.css'
import splashImg from './splash_image.jpg'
import CharIndex from './char_index';



class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState(() => {
      return { characters: this.props.getCharacters(this.props.currentUserID) };
    });
  }

  render() {
    const { characters } = this.props;
    return (
      <div className="home-page-main-box">
        <div className="home-page-characters">
          <CharIndex
            characters={characters}
          />
        </div>
        <div className="home-page-campaign-box">
          <div className="home-page-campaign-title">Campaign Menu</div>
          <div className="home-page-campaign-links">
            <button className="start-campaign">Create Campaign</button>
            <div className="home-page-lobby-join">
              <form className="home-page-lobby-form">
                <input
                  type="text"
                  className="lobby-number"
                  placeholder="Lobby Number"
                />
                <select>
                  {characters.map(char => (
                    <option>{char.name}</option>
                  ))}
                </select>
                <input
                  className="join-campaign"
                  type="submit"
                  value="Join"
                ></input>
              </form>
            </div>
          </div>
        </div>
        <div className="main-page-background-img">
          <img src={splashImg} alt="background" className="splash-image" />
        </div>
      </div>
    );
  }
}

export default HomePage;