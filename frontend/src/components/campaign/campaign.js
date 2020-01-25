import React from 'react';
import '../../stylesheet/campaign.scss';
import '../../stylesheet/dice.scss';
import io from "socket.io-client";
import Dice from "./dice"



class CampaignRoom extends React.Component {
    constructor(props) {
        super(props);
        this.socket = io.connect('http://localhost:8080');
    }

    componentDidMount() {
        this.initializeSockets();
    }

    initializeSockets() {
        this.initializeHpSocket();
    }

    initializeHpSocket() {
        this.socket.on("hp", function (data) {
            let hpEle = document.getElementById("hp");
            let hp;
            if (data === "inc") {
                hp = parseInt(hpEle.innerText) + 1
                hpEle.innerText = hp;
            } else {
                hp = hpEle.innerText - 1
                hpEle.innerText = hp;
            }

            //Save to backend
            //this.props.editCharacter()
        });
    }

    handleHpClick(type) {
        this.socket.emit("hp", type)
    }

    handleJoinClick() {
        let campId = "5e28a7d77b6d902dd5930b1b";
        let charId = "5e2ba2411da4057cd0da8dc9";
        this.props.joinCampaign(campId, charId);
    }

    render() {

        return (
            <div id="campaignContainer">
                <button onClick={() => this.handleJoinClick()}>Join Campaign</button>
                <div id="char-boxes">
                    <span>
                        <h3>Person 1: </h3>
                        <div id="person1">-</div>
                    </span>
                    <span>
                        <h3>Person 2: </h3>
                        <div id="person2">-</div>
                    </span>
                    <span>
                        <h3>Person 3: </h3>
                        <div id="person3">-</div>
                    </span>
                </div>
                    <h3>Safar</h3>
                    <h3 id="hp" className="ws-test">15</h3>
                <button className="ws-test" 
                    onClick={() => this.handleHpClick("inc")} 
                    id="incHpButton"
                > Increase HP</button>
                <button className="ws-test" 
                    onClick={() => this.handleHpClick("dec")} 
                    id="decHpButton"
                > Decrease HP</button>
                <Dice />
            </div>
        );
    }
}

export default CampaignRoom;