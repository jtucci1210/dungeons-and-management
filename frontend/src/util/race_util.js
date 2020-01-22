export const allRaces = [ "dwarf", "elf", "halfing", "human", "dragonborn", "gnome", "halfelf", "halforc", "tiefling"];

export const dwarfSubraces = ["hill", "mountain"];
export const elfSubraces = ["high", "wood", "dark"];
export const halfingSubraces = ["lightfoot", "stout"];
export const humanSubraces = [];
export const dragonbornSubraces = [];
export const gnomeSubraces = ["forest", "rock"];
export const halfelfSubraces = [];
export const halforcSubraces = [];
export const tieflingSubraces = [];


export const hillDwarf = {
    abilityScores: {
        constitution: 2,
        wisdom: 1
    },
    speed: 25,
    skillProficiencies: []
};

export const moutainDwarf = {
    abilityScores: {
        constitution: 2,
        strength: 2
    },
    speed: 25,
    skillProficiencies = []
};

export const highElf = {
    abilityScores: {
        dexterity: 2,
        intelligence: 1
    },
    speed: 30,
    skillProficiencies: ["perception"]
};

export const woodElf = {
    abilityScores: {
        dexterity: 2,
        wisdom: 1
    },
    speed: 35,
    skillProficiencies: ["perception"]
};

export const darkElf = {
    abilityScores: {
        dexterity: 2,
        charisma: 1
    },
    speed: 30,
    skillProficiencies: ["perception"]
};

export const lightfootHalfling = {
    abilityScores: {
        dexterity: 2,
        charisma: 1
    },
    speed: 25,
    skillProficiencies: []
};

export const stoutHalfling = {
    abilityScores: {
        dexterity: 2,
        constitution: 1
    },
    speed: 25,
    skillProficiencies: []
};

export const human = {
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

export const dragonborn = {
   abilityScores: {
       strength: 2,
       charisma: 1
   },
   speed: 30,
   skillProficiencies: [] 
};

export const forestGnome = {
        abilityScores: {
        intelligence: 2,
        dexterity: 1
    },
    speed: 25,
    skillProficiencies: []
};

export const rockGnome = {
    abilityScores: {
        intelligence: 2,
        constitution: 1
    },
    speed: 25,
    skillProficiencies: []
};

export const halfelf = {
    abilityScores: {
        charisma: 2
    },
    speed: 30,
    skillProficiencies: []
};

export const halforc = {
    abilityScores: {
        strength: 2,
        constitution: 1
    },
    speed: 30,
    skillProficiencies: ["intimidation"]
};

export const tiefling = {
    abilityScores: {
        intelligence: 1,
        charisma: 2
    },
    speed: 30,
    skillProficiencies: []
};