import React from 'react';
import '../../../stylesheet/race_and_class.css';
import DropDown from '../../dropdown';

class RaceAndClass extends React.Component {
    constructor(props) {
        super(props)  
        this.state = {
            races: this.props.races,
            race: this.props.race,
            class: this.props.class
        }  
        this.handleClick = this.handleClick.bind(this)  
    }

    handleClick(id) {
        this.setState(
            {
                race: this.state.races[id].title
            }
        )

    }


    render() {

        return (
            <div className="race-and-class-container">
                <div className="race-and-class">
                    <div className="race-container">
                        <h1>Race</h1>
                        <DropDown 
                            title="Select Race"
                            list={this.state.races}
                            className="race-drop-down"
                            handleClick={this.handleClick}
                        />
                        <h3>{this.state.race}</h3>


                    </div>
                    <div className="class-container">
                        <h1>Class</h1>
                    </div>
                </div>
                <div className="final-stats-container">

                </div>
            </div>
        )
    }
}

export default RaceAndClass;
