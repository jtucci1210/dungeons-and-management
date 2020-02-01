import React from 'react';
import '../../stylesheet/homepage.css';
import splashImg from './splash_image.jpg';
import CharIndex from './char_index';
import io from 'socket.io-client';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campaignRoom: "",
			campaignChar: "", //I think this should be "Choose a character"
		};
		this.socket = io.connect("http://localhost:8080");
	}

	componentDidMount() {
		this.setState(() => {
			return {
				characters: this.props.getCharacters(this.props.currentUserID)
			};
		});
		// Example of using a room
		// this.socket.on("receive-room", function (data) {
		//   console.log(data)
		// });
	}

	update(field) {
		return e =>
			this.setState({
				[field]: e.currentTarget.value
			});
	}

	campaignJoin(e) {
		e.preventDefault();
		const { characters } = this.props;
		const campKey = document.getElementById('room-num').value
		let charId = "";

		characters.forEach(char => {
			if (char.name === this.state.campaignChar) charId = char._id;
		});

		this.props.fetchCampaignByKey(campKey, charId).then(res => {
			// this.socket.emit("joinCampaign", res.campaign.campKey); //"test" should be campaign Id
			// this.socket.emit("test-room", "test")
			this.props.history.push(`/campaigns/${res.campaign._id}`);
		});
	}

	createCampaign() {
		let charId = "";
		const { characters } = this.props;
		characters.forEach(char => {
			if (char.name === this.state.campaignChar) charId = char._id;
		});
		
		this.props
			.createCampaign(charId)
			.then(result => {
				this.props.history.push(`/campaigns/${result.campaign._id}`)
			});
	}

	renderChooseCharacterForm() {
		const { characters } = this.props;
		return (
			<form
				onSubmit={e => this.campaignJoin(e)}
				className="home-page-lobby-form"
			>
				
				<br />
				<select
					className="campaign-char-selector"
					onChange={e => this.setState({campaignChar: e.target.value})}
				>
					<option
						value="Choose a Character"
						disabled={true}
						selected={true} //This is a bad way to have default in React.

					>Choose a Character</option>
					{characters.map((char, i) => (
						<option key={i}>{char.name}</option>
					))}
				</select>
				<br />
			</form>
		)
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
						{this.renderChooseCharacterForm()}
						
						<button
							onClick={() => this.createCampaign()}
							className="start-campaign"
						>
							Create Campaign
						</button>
						<div className="home-page-lobby-join">
							<span className="or-separator">-OR-</span>
							<br />
						</div>
						<input
							className="join-campaign"
							type="submit"
							value="Join"
							onClick={(e) => this.campaignJoin(e)}
						></input>
						<input
							type="text"
							value={this.state.campaignRoom}
							onChange={this.update("campaignRoom")}
							id="room-num"
							className="lobby-number"
							placeholder="Lobby Number"
						/>
						
					</div>
				</div>
				<div className="main-page-background-img">
					<img
						src={splashImg}
						alt="background"
						className="splash-image"
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(HomePage);
