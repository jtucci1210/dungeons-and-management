import React from "react";
import "../../stylesheet/campaign.scss";
import "../../stylesheet/dice.scss";
import io from "socket.io-client";
import Dice from "./dice";
import CharIndexItem from "../homepage/char_index_item";

class CampaignRoom extends React.Component {
	constructor(props) {
		super(props);
		this.socket = io.connect("http://localhost:8080");
		this.state = {
			currentChar: {}
		} 
	}

	componentDidMount() {
		this.props.getCampaignCharacters(this.props.match.params.campId)
			.then(() => this.getCurrentChar())
		this.initializeSocketListeners();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.characters !== this.state.characters){
			this.props.getCampaignCharacters(this.props.match.params.campId);
		}
	}

	initializeSocketListeners() {
		this.initializeHpSocketListener();
	}

	initializeHpSocketListener() {
		this.socket.on("hp", function(data) {
			let hpEle = document.getElementById("hp");
			let hp;
			if (data === "inc") {
				hp = parseInt(hpEle.innerText) + 1;
				hpEle.innerText = hp;
			} else {
				hp = hpEle.innerText - 1;
				hpEle.innerText = hp;
			}

			//Save to backend
			//this.props.editCharacter()
		});
	}

	handleHpClick(type) {
		this.socket.emit("hp", type);

	}

	renderChars() {
		//Conditional prevents error from render happening before getCampChars before component did mount
		if (this.props.characters.keys){
			return this.props.characters.map(char => {
				return (
							<CharIndexItem character={char} />

				);
			});
		}
	}

	getCurrentChar() {
		return this.props.characters.forEach(char => {
			if (this.props.currentUser.id === char.userId ) {
				this.setState({currentChar: char})
			}
		})
	}
	
	render() {
		
		return (
			<div id="campaignContainer">
				<ul id="char-boxes">{this.renderChars()}</ul>
				<h3>Safar</h3>
				<h3 id="hp" className="ws-test">
					{this.state.currentChar.currentHp}
				</h3>
				<button
					className="ws-test"
					onClick={() => this.handleHpClick("inc")}
					id="incHpButton"
				>
					{" "}
					Increase HP
				</button>
				<button
					className="ws-test"
					onClick={() => this.handleHpClick("dec")}
					id="decHpButton"
				>
					{" "}
					Decrease HP
				</button>
				<Dice socket={this.socket} />
			</div>
		);
	}
}

export default CampaignRoom;
