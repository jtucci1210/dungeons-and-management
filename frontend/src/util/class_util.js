export const allClasses = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];

export const barbarianSubclasses = ["path of the berserker", "path of the totem warrior"];
export const bardSubclasses = ["college of lore", "college of valor"];
export const clericSubclasses = ["knowledge domain", "life domain", "light domain", "nature domain", "tempest domain", "trickery domain", "war domain"];
export const druidSubclasses = ["circle of the land", "circle of the moon"];
export const fighterSubclasses = ["champion", "battle master", "eldritch knight"];
export const monkSubclasses = ["way of the open hand", "way of the shadow", "way of the four elements"];
export const paladinSubclasses = ["oath of devotion", "oath of the ancients", "oath of vengeance"];
export const rangerSubclasses = ["hunter", "beast master"];
export const rogueSubclasses = ["thief", "assassin", "arcane trickster"];
export const sorcererSubclasses = ["draconic bloodline", "wild magic"];
export const warlockSubclasses = ["the archfey", "the fiend", "the great old one"];
export const wizardSubclasses = ["school of abjuration", "school of conjuration", "school of divination", "school of enchantment", "school of evocation", "school of illusion", "school of necromancy", "school of transmutation"];

export const fullClass = {
    barbarian: {
        hitDice: 12,
        savingThrows: ["strength", "constitution"],
        avgHealth: 7,
        numSkills: 2,
        skillList: ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"],
        subclassType: "primal path"
    },
    bard: {
        hitDice: 8,
        savingThrows: ["dexterity", "charisma"],
        avgHealth: 5,
        numSkills: 3,
        skillList: ["athletics", "acrobatics", "sleight of hand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animal handling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion"],
        subclassType: "bard college"
    },
    cleric: {
        hitDice: 8,
        savingThrows: ["wisdom", "charisma"],
        avgHealth: 5,
        numSkills: 2,
        skillList: ["history", "insight", "medicine", "persuasion", "religion"],
        subclassType: "divine domain"
    },
    druid: {
        hitDice: 8,
        savingThrows: ["intelligence", "wisdom"],
        avgHealth: 5,
        numSkills: 2,
        skillList: ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion", "survival"],
        subclassType: "druid circle"
    },
    fighter: {
        hitDice: 10,
        savingThrows: ["strength", "constitution"],
        avgHealth: 6,
        numSkills: 2,
        skillList: ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"],
        subclassType: "martial archetypes"
    },
    monk: {
        hitDice: 8,
        savingThrows: ["strength", "dexterity"],
        avgHealth: 5,
        numSkills: 2,
        skillList: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"],
        subclassType: "monastic tradition"
    },
    paladin: {
        hitDice: 10,
        savingThrows: ["wisdom", "charisma"],
        avgHealth: 6,
        numSkills: 2,
        skillList: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"],
        subclassType: "sacred oath"
    },
    ranger: {
        hitDice: 10,
        savingThrows: ["strength", "dexterity"],
        avgHealth: 6,
        numSkills: 3,
        skillList: ["animal handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"],
        subclassType: "ranger archetype"
    },
    rogue: {
        hitDice: 8,
        savingThrows: ["dexterity", "intelligence"],
        avgHealth: 5,
        numSkills: 4,
        skillList: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight of hand", "stealth"],
        subclassType: "roguish archetype"
    },
    sorcerer: {
        hitDice: 6,
        savingThrows: ["constitution", "charisma"],
        avgHealth: 4, 
        numSkills: 2, 
        skillList: ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"],
        subclassType: "sorcerous origin"
    },
    warlock: {
        hitDice: 8,
        savingThrows: ["wisdom", "charisma"],
        avgHealth: 5, 
        numSkills: 2,
        skillList: ["arcana", "deception", "history", "intimidation", "investigation", "nature", "relgion"],
        subclassType: "otherworldly patrons"
    },
    wizard: {
        hitDice: 6,
        savingThrows: ["intelligence", "wisdom"],
        avgHealth: 4, 
        numSkills: 2,
        skillList: ["arcana", "history", "insight", "investigation", "medicine", "religion"],
        subclassType: "arcane tradition"
    }
}