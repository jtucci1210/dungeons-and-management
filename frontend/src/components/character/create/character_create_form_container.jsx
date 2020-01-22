import React from 'react';
import { connect } from 'react-redux';
import CharacterCreateForm from './character_create_form';

const mapStateToProps = state => ({
    abilities: [
        { id: 0, title: "strength", value: "", selected: false },
        { id: 1, title: "dexterity", value: "", selected: false },
        { id: 2, title: "constitution", value: "", selected: false },
        { id: 3, title: "intelligence", value: "", selected: false },
        { id: 4, title: "wisdom", value: "", selected: false },
        { id: 5, title: "charisma", value: "", selected: false },
    ],
    rolls: ["", "", "", "", "", ""],
    order: ["", "", "", "", "", ""],
    statsRolled: false,
    race: "",
    class: "",
    raceSelected: false,
    classSelected: false
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreateForm);