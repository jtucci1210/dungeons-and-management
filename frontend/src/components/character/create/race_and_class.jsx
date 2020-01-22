import React from 'react';
import '../../../stylesheet/race_and_class.css';


class RaceAndClass extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="race-and-class-container">
                <div className="race-and-class">
                    <div className="race-container">
                        <h1>Race</h1>

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
