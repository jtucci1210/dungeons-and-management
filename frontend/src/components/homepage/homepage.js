import React from 'react';
import '../../stylesheet/homepage.css';
import splashImg from './splash_image.jpg';
import CharIndex from './char_index';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			campaignRoom: "",
			campaignChar: "",
			loaded: false,
		};
	}

	componentDidMount() {
		const allCharacters = this.props.getCharacters(this.props.currentUserID)
		this.setState(() => {
			return {
				characters: this.props.getCharacters(this.props.currentUserID)
			};
		});
		Promise.all([allCharacters]).then(() => this.setState({ loaded: true }))
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
			this.props.history.push(`/campaigns/${res.campaign._id}`);
		});
	}

	createCampaign() {
		this.props
			.createCampaign()
			.then(result => {
				this.props.history.push(`/campaigns/${result.campaign._id}`)
			});
	}

	renderChooseCharacterForm() {
		// debugger;
		const { characters } = this.props;
		return (
			<form
				onSubmit={e => this.campaignJoin(e)}
				className="home-page-lobby-form"
			>
				
				<br />
				<select
					className="campaign-char-selector"
					value={!!this.state.campaignChar ? this.state.campaignChar : "Choose a Character"}
					onChange={e => this.setState({campaignChar: e.target.value})}
				>
					<option disabled={true}>Choose a Character</option>
					{characters.map((char, i) => (
						<option key={i}>{char.name}</option>
					))}
				</select>
				<br />
			</form>
		)
	}

	render() {
		if (this.state.loaded ) {
			const { characters } = this.props;
			return (
				<div className="home-page-main-box">
					<div className="home-page-characters">
						<CharIndex characters={characters} />
					</div>
					<div className="home-page-campaign-box">
						<div className="home-page-campaign-title">Campaign Menu</div>
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
							</div>
							<input
								type="text"
								value={this.state.campaignRoom}
								onChange={this.update("campaignRoom")}
								id="room-num"
								className="lobby-number"
								placeholder="Lobby Number"
								/>
							{this.renderChooseCharacterForm()}
							<input
								className="join-campaign"
								type="submit"
								value="Join"
								onClick={(e) => this.campaignJoin(e)}
							></input>
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
		} else {
			return (<div className="loading-page">
				<img src={splashImg} alt="background" className="splash-image" />
				<div className="loading-sections">
					<div>
						<i id="loading-die" className="fas fa-dice-six fa-spin"></i>
					</div>
					<div className="loading-message">Loading - If longer than 1 min, please refresh the page.</div>
				</div>
			</div>)
		}
	}
}

export default withRouter(HomePage);
