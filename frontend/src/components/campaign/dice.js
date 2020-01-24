import React from 'react'
import io from "socket.io-client";

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.socket = io.connect('http://localhost:8080');
    }

    componentDidMount() {
        this.initializeSockets();
    }

    initializeSockets() {
        this.initializeDiceSocket();
    }

    initializeDiceSocket() {
        this.socket.on("dice", function (data) {
            let diceRes = document.getElementById(`diceRes${data.diceNum}`)

            diceRes.innerHTML = data.roll;
        });
    }

    handleDiceClick(diceNum) {
        let roll = Math.floor(Math.random() * diceNum) + 1
        this.socket.emit("dice", {
            roll: roll,
            diceNum: diceNum
        })
    }

    render() {

        return(
            <div className="diceContainer">
                <span>
                    <button onClick={() => this.handleDiceClick(4)}>D4</button>
                    <div id="diceRes4" >NA</div>
                </span>
                <span>
                    <button onClick={() => this.handleDiceClick(6)}>D6</button>
                    <div id="diceRes6" >NA</div>
                </span>
                <span>
                    <button onClick={() => this.handleDiceClick(8)}>D8</button>
                    <div id="diceRes8" >NA</div>
                </span>
                <span>
                    <button onClick={() => this.handleDiceClick(10)}>D10</button>
                    <div id="diceRes10" >NA</div>
                </span>
                <span>
                    <button onClick={() => this.handleDiceClick(12)}>D12</button>
                    <div id="diceRes12" >NA</div>
                </span>
                <span>
                    <button onClick={() => this.handleDiceClick(20)}>D20</button>
                    <div id="diceRes20" >NA</div>
                </span>
                <span>
                    <button onClick={() => this.handleDiceClick(100)}>%</button>
                    <div id="diceRes100" >NA</div>
                </span>
            </div>
        )
    }
}

export default Dice