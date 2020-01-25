//Libraries
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

//Files and Functions
const Campaign = require('../../models/Campaign')
const validCreateCampInput = require('../../validation/create-campaign')
const createCampaignNamespace = require('../../app')

//Get info for a campaign using
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
        createCampaignNamespace("testKey")
        camp.characters.push(req.body.id)
        camp.save();
        res.json(camp);
    })
});

//Remove a character from a campaign
router.patch("/:id/leave", (req, res) => {
    Campaign.findById(req.params.id).then(camp => {
        charIdx = camp.characters.indexOf('req.body.character.id')
        camp.characters.splice(charIdx, 1);
        camp.save();
        res.json(camp);
    })
});

//Delete a campaign
router.delete('/:id', (req, res) => {
    Campaign.findById(req.params.id).then(camp => {
        camp.delete();
        res.json("Success")
    })
});

module.exports = router;