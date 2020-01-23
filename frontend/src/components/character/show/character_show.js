import React from 'react';
import { withRouter } from 'react-router-dom'


class CharacterShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const character = this.props.getCharacter(this.props.match.params.characterId)
    }

    render() {
        console.log(this.props);
        console.log(this.state)
        return (
            <div className="test">HasdfasdfasdfasdfI</div>
        )
    }


}

export default withRouter(CharacterShowPage)