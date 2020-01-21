const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    userId: {
        type: Integer,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})


module.exports = Character = mongoose.model('Character', CharacterSchema);