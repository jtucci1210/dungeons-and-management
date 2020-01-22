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
                        races={this.props.races}
                        race={this.props.race}
                        class={this.props.class}
                    />
                </div>
            </div>
        )
    }
}

export default CharacterCreateForm;
