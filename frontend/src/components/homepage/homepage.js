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
		let charId = "";

		characters.map(char => {
			if (char.name === this.state.campaignChar) {
				charId = char._id;
			}
		});
		this.props.fetchCampaignByKey(this.state.campaignRoom).then(res => {
			const campaignId = res.campaign._id;
			console.log(res.campaign.characters)
			if (res.campaign.characters.includes(charId)) {
				this.props.history.push(`/campaigns/${res.campaign._id}`);
			} else {
				// this.socket.emit("joinCampaign", res.campaign.campKey); //"test" should be campaign Id
				// this.socket.emit("test-room", "test")
				this.props.joinCampaign(campaignId, charId).then(result => {
					this.props.history.push(`/campaigns/${result.campaign._id}`);
				});
			}
		});
	}

	createCampaign() {
		this.props
			.createCampaign()
			.then(result =>
				this.props.history.push(`/campaigns/${result.campaign._id}`)
			);
	}

	render() {
		const { characters } = this.props;
		return (
			<div className="home-page-main-box">
				<div className="home-page-characters">
					<CharIndex characters={characters} />
				</div>
				<div className="home-page-campaign-box">
					<div className="home-page-campaign-title">
						Campaign Menu
					</div>
					<div className="home-page-campaign-links">
						<button
							onClick={() => this.createCampaign()}
							className="start-campaign"
						>
							Create Campaign
						</button>
						<div className="home-page-lobby-join">
							<span className="or-separator">-OR-</span>
							<br />
							<form
								onSubmit={e => this.campaignJoin(e)}
								className="home-page-lobby-form"
							>
								<input
									type="text"
									value={this.state.campaignRoom}
									onChange={this.update("campaignRoom")}
									className="lobby-number"
									placeholder="Lobby Number"
								/>
								<br />
								<select
									className="campaign-char-selector"
									onChange={e =>
										this.setState({
											campaignChar: e.target.value
										})
									}
								>
									<option
										value="Choose a Character"
										disabled={true}
										selected={true} //This is a bad way to have default in React.
							
									>
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
