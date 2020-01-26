//Libraries
const express = require("express");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;

//Files
const Character = require("../../models/Character")
const validCreateCharInput = require('../../validation/create-character')

//Return list of all characters for a user
router.get("/user/:user_id", (req, res) => {
        Character.find({ userId: req.params.user_id })
            .then(characters => res.json(characters))
}) 

//Create New Character
router.post("/create", (req, res) => {
    const { errors, isValid } = validCreateCharInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

        const newChar = new Character({
            userId: req.body.user.id,
            name: req.body.name,
            race: req.body.race,
            charClass: req.body.charClass,
            armorType: req.body.armorType,
            
            level: req.body.level,
            maxHp: req.body.maxHp,
            currentHp: req.body.currentHp,
            
            abilities: req.body.abilities,
            skills: req.body.skills
        })
        newChar.save();
        
        res.json({
            char: newChar
        })
});

//Get a single character
router.get('/:char_id', (req, res) => {
    Character.findById(req.params.char_id)
        .then(character => res.json(character))
});

//Edit a character
router.patch('/:char_id/edit', (req, res) => {
    Character.findById(req.params.char_id).then(char => {
        const { errors, isValid } = validCreateCharInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        char.name = req.body.name
        char.charClass = req.body.charClass
        char.armorType = req.body.armorType

        char.level = req.body.level
        char.maxHp = req.body.maxHp
        char.currentHp = req.body.currentHp

        char.abilities = JSON.parse(req.body.abilities) //Possbily get rid of JSON for actual app
        char.skills = JSON.parse(req.body.skills) //Possbily get rid of JSON for actual app


        char.save();
        res.json(char)
    })
});

//Delete a character
router.delete('/:char_id', (req, res) => {
    Character.findById(req.params.char_id).then(char => {
       char.delete();
       res.json("Success")
    })
});

module.exports = router;
