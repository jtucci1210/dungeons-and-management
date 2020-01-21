const allRaces = [ "dwarf", "elf", "halfing", "human", "dragonborn", "gnome", "halfelf", "halforc", "tiefling"];

const dwarfSubraces = ["hill", "mountain"];
const elfSubraces = ["high", "wood", "dark"];
const halfingSubraces = ["lightfoot", "stout"];
const humanSubraces = [];
const dragonbornSubraces = [];
const gnomeSubraces = ["forest", "rock"];
const halfelfSubraces = [];
const halforcSubraces = [];
const tieflingSubraces = [];


const hillDwarf = {
    abilityScores: {
        constitution: 2,
        wisdom: 1
    },
    speed: 25,
    skillProficiencies: []
};

const moutainDwarf = {
    abilityScores: {
        constitution: 2,
        strength: 2
    },
    speed: 25,
    skillProficiencies = []
};

const highElf = {
    abilityScores: {
        dexterity: 2,
        intelligence: 1
    },
    speed: 30,
    skillProficiencies: ["perception"]
};

const woodElf = {
    abilityScores: {
        dexterity: 2,
        wisdom: 1
    },
    speed: 35,
    skillProficiencies: ["perception"]
};

const darkElf = {
    abilityScores: {
        dexterity: 2,
        charisma: 1
    },
    speed: 30,
    skillProficiencies: ["perception"]
};

const lightfootHalfling = {
    abilityScores: {
        dexterity: 2,
        charisma: 1
    },
    speed: 25,
    skillProficiencies: []
};

const stoutHalfling = {
    abilityScores: {
        dexterity: 2,
        constitution: 1
    },
    speed: 25,
    skillProficiencies: []
};

const human = {
    abilityScores: {
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma:1
    },
    speed: 30,
    skillProficiencies: []
};

const dragonborn = {
   abilityScores: {
       strength: 2,
       charisma: 1
   },
   speed: 30,
   skillProficiencies: [] 
};

const forestGnome = {
    abilityScores: {
        intelligence: 2,
        dexterity: 1
    },
    speed: 25,
    skillProficiencies: []
};

const rockGnome = {
    abilityScores: {
        intelligence: 2,
        constitution: 1
    },
    speed: 25,
    skillProficiencies: []
};

const halfelf = {
    abilityScores: {
        charisma: 2
    },
    speed: 30,
    skillProficiencies: []
};

const halforc = {
    abilityScores: {
        strength: 2,
        constitution: 1
    },
    speed: 30,
    skillProficiencies: ["intimidation"]
};

const tiefling = {
    abilityScores: {
        intelligence: 1,
        charisma: 2
    },
    speed: 30,
    skillProficiencies: []
};