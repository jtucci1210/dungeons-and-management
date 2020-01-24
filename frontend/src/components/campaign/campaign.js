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

    render() {

        return (
            <div id="campaignContainer">
                <h3 className="ws-test">Safar</h3>
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