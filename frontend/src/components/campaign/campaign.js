import React from 'react';
import '../../stylesheet/campaign.scss';
import '../../stylesheet/dice.scss';
import io from 'socket.io-client';
import Dice from './dice';
import CharIndexItem from '../homepage/char_index_item';
import CharacterShowContainer from '../character/show/character_show_container'

class CampaignRoom extends React.Component {
	constructor(props) {
		super(props);
		this.campId = this.props.match.params.campId;
		this.socket = io.connect("http://localhost:8080", {data: 'test'});
		this.socket.emit("sendJoinRoomToBack", {
			campId: this.campId
		})

		this.state = {
			currentChar: {},
			reload: false
		} 
		this.saveHp = this.saveHp.bind(this)
	}

	componentDidMount() {
		this.props.getCampaign(this.campId)
			.then(() => this.getCurrentChar());
		this.initializeSocketListeners();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.reload){
			this.reload();
		}
	}

	initializeSocketListeners() {
		this.initializeHpSocketListener();
	}

	initializeHpSocketListener() {
		this.socket.on("sendHptoFront", function(newCharData) {
			let charHp = document.getElementById(`charidhp-${newCharData._id}`);
			charHp.innerText = `${newCharData.maxHp} (${newCharData.currentHp})`
			//Set class to safe or not safe hp
		});
	}

	handleHpClick(type) {
		let oldState = Object.assign({}, this.state.currentChar);
		if (type === "inc") {
			oldState.currentHp += 1;
		} else {
			oldState.currentHp -= 1;
		}
		this.setState({
			currentChar: oldState
		})
	}

	saveHp() {
		let oldState = Object.assign({}, this.state.currentChar);
		this.props
			.editCharacter(this.state.currentChar)
			.then(
				this.props.getCampaign(this.campId)
			);

		this.setState({
			currentChar: oldState,
			reload: true
		});

		this.socket.emit("sendHptoBack", {
			character: this.state.currentChar,
			campId: this.campId
		})
	}

	renderChars() {

		//Conditional prevents error from render happening before getCampChars before component did mount
		if (this.props.characters){
			return this.props.characters.map(char => {
				return (
						<CharIndexItem key={char._id} character={char} inCampRoom={true} />
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

	handleLeaveClick() {
		let campId = this.campId;
		let charId = this.state.currentChar._id
		this.props.leaveCampaign(campId, charId)
		this.props.history.push(`/home`)
	}

	renderCurrentCharForm() {
		const { characters } = this.props;
		if (this.props.characters) {

			const userChars = characters.filter(char => {
				return this.props.currentUser.id === char.userId
			})

			return (
				<form
					className="home-page-lobby-form"
				>
	
					<br />
					<select
						className="campaign-char-selector"
						onChange={e => this.changeCurrentChar(e)}
					>
					<option>Choose char</option>
					{userChars.map((char, i) => (
						<option key={i}>{char.name}</option>
					))}
					</select>
					<br />
				</form>
			)
		}
	}
	
	render() {
		const { currentChar } = this.state
		return (
			<div id="campaignContainer">
				<div id="campaign-info-container">
					<h3>{`Room#: ${this.props.campaign.campKey}`}</h3>
					{this.renderCurrentCharForm()}
					<button onClick={() => this.handleLeaveClick() }>Leave Campaign</button>
				</div>
				<ul id="char-boxes">{this.renderChars()}</ul>
				<Dice 
					socket={this.socket}
					currentChar={this.state.currentChar}
					characters={this.props.characters}
				/>
				<div id="current-char-info">
					<h3>{currentChar.name}</h3>
					<h3 id="hp" className="ws-test">
						{currentChar.currentHp}
					</h3>
					<button
						className="ws-test"
						onClick={() => this.handleHpClick("inc")}
						id="incHpButton"
					>{" "}Increase HP</button>
					<button
						className="ws-test"
						onClick={() => this.handleHpClick("dec")}
						id="decHpButton"
					>{" "}Decrease HP</button>
					<button onClick={() => this.saveHp()}>saveHp</button>
				</div>
				
				{/* <CharacterShowContainer character={currentChar} /> */}
				
			</div>
		);
	}

	//Helper Methods
	reload() {
			let oldState = Object.assign({}, this.state);
			oldState.reload = false;
			this.setState(oldState);
			this.props.getCampaign(this.campId);
	}

	changeCurrentChar(e) {
		let oldState = Object.assign({}, this.state)
		let { characters } = this.props;

		characters.forEach(character => {
			if (character.name === e.target.value) {
				oldState.currentChar = character
			}
		})

		this.setState(oldState)
	}
}


export default CampaignRoom;

