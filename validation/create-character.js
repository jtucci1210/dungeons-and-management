const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCreateCharacterInput(data) {
        let errors = {}

        data.name = validText(data.name) ? data.name : '';
        data.race = validText(data.race) ? data.race : '';
        data.charClass = validText(data.charClass) ? data.charClass : '';
        data.armorType = validText(data.armorType) ? data.armorType : '';
        
        if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
                errors.name = 'Name must be between 2 and 30 characters';
        }

        if (Validator.isEmpty(data.name)) {
                errors.name = 'Name field is required';
        }

        if (Validator.isEmpty(data.race)) {
                errors.race = 'You must choose a race';
        }
        if (Validator.isEmpty(data.charClass)) {
                errors.charClass = 'You must choose a class';
        }
        if (Validator.isEmpty(data.armorType)) {
                errors.armorType = 'You must choose an armor type';
        }

        return {
                errors,
                isValid: Object.keys(errors).length === 0
        };
}