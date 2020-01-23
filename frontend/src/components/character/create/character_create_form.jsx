import React from 'react';
import StatRoller from './stat_roller';
import RaceAndClass from './race_and_class';
import '../../../stylesheet/character_create_form.css';

class CharacterCreateForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="character-create-form-container">
                <div className="character-name">
                    <input type="text" placeholder="character name"/>
                </div>
                <div className="stat-roller-component">
                    <StatRoller 
                        abilities = {this.props.abilities}
                        rolls = {this.props.rolls}
                        order = {this.props.order}
                        statsRolled = {this.props.statsRolled}
                    />
                </div>
                <div className="race-and-class-component">
                        <RaceAndClass 
                            raceSelected={this.props.raceSelected}
                            classSelected={this.props.classSelected}
                            subraceSelected={this.props.subraceSelected}
                            races={this.props.races}
                            subraces={this.props.subraces}
                            race={this.props.race}
                            class={this.props.class}
                            fullRace={this.props.fullRace}
                            statsRolled={this.props.statsRolled}
                            classes={this.props.classes}
                        />
                </div>
            </div>
        )
    }
}

export default CharacterCreateForm;
