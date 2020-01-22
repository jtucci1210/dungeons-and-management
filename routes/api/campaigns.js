//Libraries
const express = require("express");
const router = express.Router();

//Files
const Campaign = require('../../models/Campaign')
const validCreateCampInput = require('../../validation/create-campaign')

//Get info for a campaign
router.get('/:id', (req, res) => {
    Campaign.findById(req.params.id)
        .then(campaign => res.json(campaign))
});

//Create new campaign
router.post("/create", (req, res) => {
    const { errors, isValid } = validCreateCampInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const campKey = req.body.campKey || Math.floor(Math.random() * 10000);
    const newCamp = Campaign({
        name: req.body.name,
        key: campKey
    })

    newCamp.save()
    res.json({
        campaign: newCamp
    })
});

//Add character to a campaign
router.patch("/:id/join", (req, res) => {
    Campaign.findById(req.params.id).then(camp => {
        camp.characters.push(req.body.character.id)
        camp.save();
        res.json(camp);
    })
});

module.exports = router;