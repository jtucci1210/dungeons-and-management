import React from "react";
import io from "socket.io-client";
import * as DiceUtil from "../../util/dice_util";

class Dice extends React.Component {
	constructor(props) {
		super(props);
		this.calcRollTotal = this.calcRollTotal.bind(this);
		this.diceArr = [4, 6, 8, 10, 12, 20];

		this.initializeDiceSocketListeners = this.initializeDiceSocketListeners.bind(this)
	}

	componentDidMount() {
		this.socket = this.props.socket;
		this.initializeSocketListeners();
	}

	handlePercentRoll() {
		let roll = Math.floor(Math.random() * 100) + 1;
		let diceNum = 100;
		let diceRes = document.getElementById(`diceRes100`);
		diceRes.innerHTML = `${roll}%`;
		this.socket.emit("dice", {
			roll: roll,
			diceNum: diceNum
		});
	}

	handleRoll() {
		this.diceArr.forEach(die => this.rollSingleDie(die));
		this.calcRollTotal();
	}

	handleClear() {
		let allDice = this.diceArr.concat(100);
		allDice.forEach(die => {
			let dieEle = document.getElementById(`diceRes${die}`);
			let dieInput = document.getElementById(`num${die}`);
			dieInput.value = "";
			dieEle.innerHTML = "-";
		});
	}

	renderDiceButtons() {
		return this.diceArr.map(die => (
			<span key={die}>
				<h3>D{die}</h3>
				<input type="text" id={`num${die}`} className="numDice"></input>
				<div id={`diceRes${die}`}>-</div>
			</span>
		));
	}

	render() {
		return (
			<div id="dice-component">
				<div id="dice-container">
					{this.renderDiceButtons()}
					<span>
						<h3>%</h3>
						<button
							type="text"
							id="num100"
							className="numDice"
							onClick={() => this.handlePercentRoll()}
						>
							Roll %
						</button>
						<div id="diceRes100">-</div>
					</span>
				</div>
				<div id="roll-buttons">
					<button onClick={() => this.handleRoll()}>Roll Dice</button>
					<button onClick={() => this.handleClear()}>
						Clear Roll
					</button>
					<h2 id="roll-total">Total :</h2>
				</div>
			</div>
		);
	}

	//Helper Functions
	initializeSocketListeners() {
		this.initializeDiceSocketListeners();
	}

	initializeDiceSocketListeners() {
		//These listen for events that are sent from the server on the backend
		this.socket.on("sendTotalToFront", function (data) {
			let currentDt = document.getElementById(`dt-${data.charId}`);
			currentDt.innerHTML = `${data.rollTotal}`
		});
	}

	calcRollTotal() {
		let rollTotal = 0;

		this.diceArr.forEach(die => {
			let sub = parseInt(
				document.getElementById(`diceRes${die}`).innerHTML
			);
			rollTotal += sub;
		});

		this.showRollTotal(rollTotal);
	}

	showRollTotal(rollTotal) {
		let totalEle = document.getElementById("roll-total");
		totalEle.innerHTML = `Total: ${rollTotal}`;

		let data = {
			rollTotal: rollTotal,
			charId: this.props.currentChar._id
		}
		this.socket.emit("sendTotalToBack", data);
	}

	rollSingleDie(diceNum) {
		let numDice = document.getElementById(`num${diceNum}`).value;
		let roll = DiceUtil.roll(numDice, diceNum);
		this.showRoll(diceNum, roll);
	}

	showRoll(diceNum, roll) {
		let diceRes = document.getElementById(`diceRes${diceNum}`);
		diceRes.innerHTML = roll;

	}
}

export default Dice;
