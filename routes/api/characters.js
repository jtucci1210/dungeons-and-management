//Libraries
const express = require("express");
const router = express.Router();

//Files
const Character = require("../../models/Character")
const validCreateCharInput = require('../../validation/create-character')



router.post("/create", (req, res) => {
    const { errors, isValid } = validCreateCharInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newChar = new Character({
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

    newChar.save()

    res.json({
        char: newChar
    })
});

module.exports = router;