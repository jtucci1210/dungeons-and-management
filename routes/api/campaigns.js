//Libraries
const express = require("express");
const router = express.Router();

//Files and Functions
const Campaign = require("../../models/Campaign");

//Get info for a campaign using id from params
router.get('/:id', (req, res) => {

    Campaign.findById(req.params.id)
        .then(campaign => {
			// res.json(campaign);
			Character.find({ _id: { $in: campaign.characters } }).then(characters =>
				res.json({
					campaign: campaign,
					characters: characters
				})
			);

		})
});

//Get info for a campaign using key

router.post("/fetch", (req, res) => {
	Campaign.findOne({ campKey: req.body.key }).then(campaign =>
		res.json(campaign)
	);
});

//Create new campaign
router.post("/create", (req, res) => {
	// const { errors, isValid } = validCreateCampInput(req.body);

	// if (!isValid) {
	//     return res.status(400).json(errors);
	// }

	const campKey = req.body.campKey || Math.floor(Math.random() * 10000);
	const newCamp = Campaign({
		campKey: campKey
	});

	newCamp.save();
	res.json(newCamp);
});

//Add character to a campaign
router.patch("/:id/join", (req, res) => {
	Campaign.findById(req.params.id).then(camp => {
		camp.characters.push(req.body.id);
		camp.save();
		res.json(camp);
	});
});

//Remove a character from a campaign
router.patch("/:id/leave", (req, res) => {
	Campaign.findById(req.params.id).then(camp => {
		charIdx = camp.characters.indexOf(req.body.id);
		camp.characters.splice(charIdx, 1);
		camp.save();
		res.json(camp);
	});
});

//Delete a campaign
router.delete("/:id", (req, res) => {
	Campaign.findById(req.params.id).then(camp => {
		camp.deleteOne();
		res.json("Success");
	});
});

module.exports = router;
