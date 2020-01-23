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
    subrace: "",
    raceSelected: false,
    subraceSelected: false,
    finalRace: "",
    races: [
        { id: 0, title: "dwarf", selected: false},
        { id: 1, title: "elf", selected: false},
        { id: 2, title: "halfling", selected: false},
        { id: 3, title: "human", selected: false},
        { id: 4, title: "dragonborn", selected: false},
        { id: 5, title: "gnome", selected: false},
        { id: 6, title: "halfelf", selected: false},
        { id: 7, title: "halforc", selected: false},
        { id: 8, title: "tiefling", selected: false}
    ],
    subraces: {
        dwarf: [{ id: 0, title: "hill", selected: false }, { id: 1, title: "mountain", selected: false }],
        elf: [{ id: 0, title: "high", selected: false }, { id: 1, title: "wood", selected: false }, { id: 2, title: "dark", selected: false }], 
        halfling: [{ id: 0, title: "lightfoot", selected: false }, { id: 1, title: "stout", selected: false }],
        gnome: [{ id: 0, title: "forest", selected: false }, { id: 1, title: "rock", selected: false }] 
    },
    classSelected: false
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreateForm);