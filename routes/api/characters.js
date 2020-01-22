//Libraries
const express = require("express");
const router = express.Router();

//Files
const Character = require("../../models/Character")
const validCreateCharInput = require('../../validation/create-character')

//Return list of all characters for a user
// router.get("/", (req, res) => {
//     User.findOne({ email: 'superman@gmail.com' }).then(user => {
        
//     })
// }) 

//Create New Character
router.post("/create", (req, res) => {
    const { errors, isValid } = validCreateCharInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: 'safar@gmail.com' }).then(user => {
        const newChar = new Character({
            userId: user.id,
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
            user: user,
            char: newChar
        })

    })
});



module.exports = router;