import React from 'react';
import '../../stylesheet/homepage.css'
import splashImg from './splash_image.jpg'
import CharIndex from './char_index';



class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaignRoom: "",
      campaignChar: ""
    };
  }
  componentDidMount() {
    this.setState(() => {
      return { characters: this.props.getCharacters(this.props.currentUserID) };
    });
  }
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }
  campaignJoin (e) {
    e.preventDefault();
    const { characters } = this.props;
    characters.map(char => {
      if (char.name === this.state.campaignChar) {
        const charId = char._id
      } 
    })
      // this.props.joinCampaign(this.state.campaignId, charId);
  }
  campaignCreate () {
    // this.props.campaignCreate();
  }

  render() {
    const { characters } = this.props;
    return (
      <div className="home-page-main-box">
        <div className="home-page-characters">
          <CharIndex characters={characters} />
        </div>
        <div className="home-page-campaign-box">
          <div className="home-page-campaign-title">Campaign Menu</div>
          <div className="home-page-campaign-links">
            <button onClick={this.campaignCreate()} className="start-campaign">
              Create Campaign</button>
            <div className="home-page-lobby-join">
              <span className="or-separator">-OR-</span>
              <br />
              <form onSubmit={this.campaignJoin} className="home-page-lobby-form">
                <input
                  type="text"
                  value={this.state.campaignRoom}
                  onChange={this.update("campaignRoom")}
                  className="lobby-number"
                  placeholder="Lobby Number"
                />
                <br />
                <select
                  value={
                    this.state.campaignChar
                      ? this.state.campaignChar
                      : "Choose a character"
                  }
                  className="campaign-char-selector"
                  onChange={e =>
                    this.setState({ campaignChar: e.target.value })
                  }
                >
                  <option value="Choose a Character" disabled>
                    Choose a Character
                  </option>
                  {characters.map((char, i) => (
                    <option key={i}>{char.name}</option>
                  ))}
                </select>
                <br />
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