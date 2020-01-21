import React from 'react';
import { connect } from 'react-redux';
import StatRoller from './stat_roller';

const mapStateToProps = state => ({
    abilities: {
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: ""
    }
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(StatRoller);