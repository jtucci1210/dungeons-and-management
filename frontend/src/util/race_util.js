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

export const fullRace = {
    hillDwarf: {
        abilityScores: {
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            charisma: 0,
            // 
            constitution: 2,
            wisdom: 1
        },
        speed: 25,
        skillProficiencies: null
    },
    mountainDwarf: {
        abilityScores: {
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            //
            constitution: 2,
            strength: 2
        },
        speed: 25,
        skillProficiencies: null
    },
    highElf: {
        abilityScores: {
            strength: 0,
            constitution: 0,
            wisdom: 0,
            charisma: 0,
            // 
            dexterity: 2,
            intelligence: 1
        },
        speed: 30,
        skillProficiencies: ["perception"]
    },
    woodElf: {
        abilityScores: {
            strength: 0,
            constitution: 0,
            intelligence: 0,
            charisma: 0,
            // 
            dexterity: 2,
            wisdom: 1
        },
        speed: 35,
        skillProficiencies: ["perception"]
    },
    darkElf: {
        abilityScores: {
            strength: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            // 
            dexterity: 2,
            charisma: 1
        },
        speed: 30,
        skillProficiencies: ["perception"]
    },
    lightfootHalfling: {
        abilityScores: {
            strength: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            // 
            dexterity: 2,
            charisma: 1
        },
        speed: 25,
        skillProficiencies: null
    },
    stoutHalfling: {
        abilityScores: {
            strength: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            // 
            dexterity: 2,
            constitution: 1
        },
        speed: 25,
        skillProficiencies: null
    },
    human: {
        abilityScores: {
            strength: 1,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1
        },
        speed: 30,
        skillProficiencies: null
    },
    dragonborn: {
        abilityScores: {
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            //
            strength: 2,
            charisma: 1,
            
        },
        speed: 30,
        skillProficiencies: null
    },
    forestGnome: {
        abilityScores: {
            strength: 0,
            constitution: 0,
            wisdom: 0,
            charisma: 0,
            //
            intelligence: 2,
            dexterity: 1
        },
        speed: 25,
        skillProficiencies: null
    },
    rockGnome: {
        abilityScores: {
            strength: 0,
            dexterity: 0,
            wisdom: 0,
            charisma: 0,
            //
            intelligence: 2,
            constitution: 1
        },
        speed: 25,
        skillProficiencies: null
    },
    halfelf: {
        abilityScores: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            //
            charisma: 2
        },
        speed: 30,
        skillProficiencies: null
    },
    halforc: {
        abilityScores: {
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
            //
            strength: 2,
            constitution: 1
        },
        speed: 30,
        skillProficiencies: ["intimidation"]
    },
    tiefling: {
        abilityScores: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            wisdom: 0,
            //
            intelligence: 1,
            charisma: 2
        },
        speed: 30,
        skillProficiencies: null
    }

}