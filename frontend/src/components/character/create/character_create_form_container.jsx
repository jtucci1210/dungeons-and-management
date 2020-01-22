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
    races: [
        { id: 0, title: "dwarf", selected: false, subraces: [{ title: "hill" }, { title: "mountain" }] },
        { id: 1, title: "elf", selected: false, subraces: [{ title: "high" }, { title: "wood" }, { title: "dark" }] },
        { id: 2, title: "halfing", selected: false, subraces: [{ title: "lightfoot" }, { title: "stout" }] },
        { id: 3, title: "human", selected: false, },
        { id: 4, title: "dragonborn", selected: false, },
        { id: 5, title: "gnome", selected: false, subraces: [{ title: "forest" }, { title: "rock" }] },
        { id: 6, title: "halfelf", selected: false, },
        { id: 7, title: "halforc", selected: false, },
        { id: 8, title: "tiefling", selected: false, }
    ],
    classSelected: false
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreateForm);