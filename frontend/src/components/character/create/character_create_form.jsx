import React from 'react';
import StatRoller from './stat_roller';
import RaceAndClass from './race_and_class';
import '../../../stylesheet/character_create_form.css';

class CharacterCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props}
        this.updateState = this.updateState.bind(this)
    }

    updateState(slice) {
        this.setState(slice)
    }

    render() {
        debugger
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
                        updateState={this.updateState}
                    />
                </div>
                <div className="race-and-class-component">
                    {
                        this.state.statsRolled
                        ?
                        <RaceAndClass 
                            raceSelected={this.props.raceSelected}
                            classSelected={this.props.classSelected}
                            subraceSelected={this.props.subraceSelected}
                            races={this.props.races}
                            subraces={this.props.subraces}
                            race={this.props.race}
                            class={this.props.class}
                            fullRace={this.props.fullRace}
                            classes={this.props.classes}
                            updateState={this.updateState}

                        />
                        :
                        ""
                    }
                </div>
            </div>
        )
    }
}

export default CharacterCreateForm;
