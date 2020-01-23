import React from 'react';
import { withRouter } from 'react-router-dom'


class CharacterShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCharacter(this.props.match.params.characterId)
    }

    render() {
        console.log(this.props.character)
        // console.log(this.props.match.params.characterId)
        return (
            <div className="test">{this.props.character.name}</div>
        )
    }


}

export default withRouter(CharacterShowPage)