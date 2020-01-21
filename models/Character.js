const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    //User Info
    userId: {
        type: Schema.ObjectId,
        required: true
    },

    //Character Info
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    subrace: {
        type: String
    },
    class: {
        type: String,
        required: true
    },
    subclass: {
        type: String,
        required: true
    },
    armortype: {
        type: String,
        required: true
    },

    //Character Stats
    level: {
        type: Number,
        required: true
    },
    maxHp: {
        type: Number,
        required: true
    },
    currentHp: {
        type: Number,
        required: true
    },

    //Character abilities and skills
    abilities: {
        type: {},
        required: true
    },
    skills: {
        type: {},
        required: true
    },

    //Creation and updates logs
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date
    }
    
})


module.exports = Character = mongoose.model('Character', CharacterSchema);