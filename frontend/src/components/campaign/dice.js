import React from 'react'
import io from "socket.io-client";

class Dice extends React.Component {
    constructor(props) {
        super(props)
        this.socket = io.connect('http://localhost:8080');
        this.calcRollTotal = this.calcRollTotal.bind(this);
        this.diceArr = [4, 6, 8, 10, 12, 20]
    }

    componentDidMount() {
        this.initializeSockets();
    }

    initializeSockets() {
        this.initializeDiceSockets();
    }

    initializeDiceSockets() {
        this.socket.on("dice", function (data) {
                let diceRes = document.getElementById(`diceRes${data.diceNum}`)
                diceRes.innerHTML = data.roll;
        });

        this.socket.on("total", function (data) {
            let diceTotal = document.getElementById(`roll-total`)
            diceTotal.innerHTML = `Total: ${data}`;
        });
    }

    handleDiceClick(diceNum) {
        let numDice = document.getElementById(`num${diceNum}`).value
        let roll = (Math.floor(Math.random() * diceNum) + 1) * numDice
        let diceRes = document.getElementById(`diceRes${diceNum}`)
        diceRes.innerHTML = roll;
        this.socket.emit("dice", {
            roll: roll,
            diceNum: diceNum
        })
    }

    handleRoll() {
        this.diceArr.forEach(die => this.handleDiceClick(die))
        this.calcRollTotal()
    }

    calcRollTotal() {
        let rollTotal = 0

        this.diceArr.forEach(die => {
            let sub = parseInt(document.getElementById(`diceRes${die}`).innerHTML)
            rollTotal += sub;
        })

        let totalEle = document.getElementById('roll-total')
        totalEle.innerHTML = `Total: ${rollTotal}`;
        this.socket.emit("total", rollTotal)
    }

    handleClear() {
        this.diceArr.forEach(die => {
            let dieEle = document.getElementById(`diceRes${die}`)
            let dieInput = document.getElementById(`num${die}`)
            dieInput.value = "";
            dieEle.innerHTML = "";
        })
    }

    render() {

        return(
            <div id="dice-component">
                <div id="dice-container" >
                    <span>
                        <h3>D4</h3>  
                        <input type="text" id="num4" className="numDice"></input>   
                        <div id="diceRes4" >NA</div>
                    </span>
                    <span>
                        <h3>D6</h3> 
                        <input type="text" id="num6" className="numDice"></input>
                        <div id="diceRes6" >NA</div>
                    </span>
                    <span>
                        <h3>D8</h3> 
                        <input type="text" id="num8" className="numDice"></input>
                        <div id="diceRes8" >NA</div>
                    </span>
                    <span>
                        <h3>D10</h3> 
                        <input type="text" id="num10" className="numDice"></input>
                        <div id="diceRes10" >NA</div>
                    </span>
                    <span>
                        <h3>D12</h3> 
                        <input type="text" id="num12" className="numDice"></input>
                        <div id="diceRes12" >NA</div>
                    </span>
                    <span>
                        <h3>D20</h3> 
                        <input type="text" id="num20" className="numDice"></input>
                        <div id="diceRes20" >NA</div>
                    </span>
                    <span>
                        <h3>%</h3> 
                        <input type="text" id="num100" className="numDice"></input>
                        <div id="diceRes100" >NA</div>
                    </span>
                </div>
                <div id="roll-buttons">
                    <button onClick={() => this.handleRoll()} >Roll Dice</button>
                    <button onClick={() => this.handleClear()}>Clear Roll</button>
                    <h2 id="roll-total"></h2>
                </div>
            </div>
        )
    }
}

export default Dice