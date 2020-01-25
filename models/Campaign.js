const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampaignSchema = new Schema({
        name: {
                type: String,
                required: true,
        },
        key: {
                type: String,
                required: true,
                unique: true
        },
        characters: [{ 
                type: Schema.Types.ObjectId, ref: 'Character' 
        }]
})

module.exports = User = mongoose.model('Campaign', CampaignSchema);
