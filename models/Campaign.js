const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
        campKey: {
                type: String,
                required: true,
                unique: true
        },
        characters: [{
                type: Schema.Types.ObjectId, ref: 'Character'
        }]
})

module.exports = Campaign = mongoose.model('Campaign', CampaignSchema);
