import React from 'react';
import '../../stylesheet/homepage.css'
import splashImg from './splash_image.jpg'
import CharIndex from './char_index';
import io from "socket.io-client";



class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.socket = io.connect('http://localhost:8080');
    }

    componentDidMount() {
      // Example of using a room
      // this.socket.on("receive-room", function (data) { 
      //   console.log(data)
      // });
    }

    handleJoinClick() {
      let campId = "5e28a7d77b6d902dd5930b1b";
      let charId = "5e2ba2411da4057cd0da8dc9";
      this.props.joinCampaign(campId, charId);

      // this.socket.emit("joinCampaign", "test") //"test" should be campaign Id
      // this.socket.emit("test-room", "test")
    }

    render() {
        
        return (
          <div className="home-page-main-box">
            <div className="home-page-characters">
              <CharIndex />
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
                    <input
                      className="join-campaign"
                      type="submit"
                      value="Join"
                      onClick={() => this.handleJoinClick()}
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