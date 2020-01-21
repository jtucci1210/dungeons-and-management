const allClasses = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", "wizard"];

const barbarianSubclasses = ["path of the berserker", "path of the totem warrior"];
const bardSubclasses = ["college of lore", "college of valor"];
const clericSubclasses = ["knowledge domain", "life domain", "light domain", "nature domain", "tempest domain", "trickery domain", "war domain"];
const druidSubclasses = ["circle of the land", "circle of the moon"];
const fighterSubclasses = ["champion", "battle master", "eldritch knight"];
const monkSubclasses = ["way of the open hand", "way of the shadow", "way of the four elements"];
const paladinSubclasses = ["oath of devotion", "oath of the ancients", "oath of vengeance"];
const rangerSubclasses = ["hunter", "beast master"];
const rogueSubclasses = ["thief", "assassin", "arcane trickster"];
const sorcererSubclasses = ["draconic bloodline", "wild magic"];
const warlockSubclasses = ["the archfey", "the fiend", "the great old one"];
const wizardSubclasses = ["school of abjuration", "school of conjuration", "school of divination", "school of enchantment", "school of evocation", "school of illusion", "school of necromancy", "school of transmutation"];

const barbarian = {
    hitDice: 12,
    savingThrows: ["strength", "constitution"],
    avgHealth: 7,
    numSkills: 2,
    skillList: ["animal handling", "athletics", "intimidation", "nature", "perception", "survival"],
    subclassType: "primal path"
};

const bard = {
    hitDice: 8,
    savingThrows: ["dexterity", "charisma"],
    avgHealth: 5,
    numSkills: 3,
    skillList: ["athletics", "acrobatics", "sleight of hand", "stealth", "arcana", "history", "investigation", "nature", "religion", "animal handling", "insight", "medicine", "perception", "survival", "deception", "intimidation", "performance", "persuasion"],
    subclassType: "bard college"
};

const cleric = {
    hitDice: 8,
    savingThrows: ["wisdom", "charisma"],
    avgHealth: 5,
    numSkills: 2,
    skillList: ["history", "insight", "medicine", "persuasion", "religion"],
    subclassType: "divine domain"
};

const druid = {
    hitDice: 8,
    savingThrows: ["intelligence", "wisdom"],
    avgHealth: 5,
    numSkills: 2,
    skillList: ["arcana", "animal handling", "insight", "medicine", "nature", "perception", "religion", "survival"],
    subclassType: "druid circle"
};

const fighter = {
    hitDice: 10,
    savingThrows: ["strength", "constitution"],
    avgHealth: 6,
    numSkills: 2,
    skillList: ["acrobatics", "animal handling", "athletics", "history", "insight", "intimidation", "perception", "survival"],
    subclassType: "martial archetypes"
};

const monk = {
    hitDice: 8,
    savingThrows: ["strength", "dexterity"],
    avgHealth: 5,
    numSkills: 2,
    skillList: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"],
    subclassType: "monastic tradition"
};

const paladin = {
    hitDice: 10,
    savingThrows: ["wisdom", "charisma"],
    avgHealth: 6,
    numSkills: 2,
    skillList: ["athletics", "insight", "intimidation", "medicine", "persuasion", "religion"],
    subclassType: "sacred oath"
};

const ranger = {
    hitDice: 10,
    savingThrows: ["strength", "dexterity"],
    avgHealth: 6,
    numSkills: 3,
    skillList: ["animal handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"],
    subclassType: "ranger archetype"
};

const rogue = {
    hitDice: 8,
    savingThrows: ["dexterity", "intelligence"],
    avgHealth: 5,
    numSkills: 4,
    skillList: ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight of hand", "stealth"],
    subclassType: "roguish archetype"
};

const sorcerer = {
    hitDice: 6,
    savingThrows: ["constitution", "charisma"],
    avgHealth: 4, 
    numSkills: 2, 
    skillList: ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"],
    subclassType: "sorcerous origin"
};

const warlock = {
    hitDice: 8,
    savingThrows: ["wisdom", "charisma"],
    avgHealth: 5, 
    numSkills: 2,
    skillList: ["arcana", "deception", "history", "intimidation", "investigation", "nature", "relgion"],
    subclassType: "otherworldly patrons"
};

const wizard = {
    hitDice: 6,
    savingThrows: ["intelligence", "wisdom"],
    avgHealth: 4, 
    numSkills: 2,
    skillList: ["arcana", "history", "insight", "investigation", "medicine", "religion"],
    subclassType: "arcane tradition"
};

