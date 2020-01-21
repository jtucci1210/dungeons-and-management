const mod = (abilityScore, proficiencyBonus = 0) => {
    return Math.floor((abilityScore - 10) / 2 ) + proficiencyBonus
};

const proficiencyBonus = {
    levelOne: 2,
    levelTwo: 2,
    levelThree: 2,
    levelFour: 2,
    levelFive: 3,
    levelSix: 3,
    levelSeven: 3,
    levelEight: 3,
    levelNine: 4,
    levelTen: 4,
    levelEleven: 4,
    levelTwelve: 4,
    levelThirteen: 5,
    levelFourteen: 5,
    levelFifteen: 5,
    levelSixteen: 5,
    levelSeventeen: 6,
    levelEighteen: 6,
    levelNineteen: 6,
    levelTwenty: 6
};

// hitDice => class.hitDice

const healthLevelOne = ( hitDice, constitutionMod ) => {
    return hitDice + constitutionMod
};

// hitDice => class.hitDice, avgHealth => class.avgHealth

const healthLevelUp = ( hitDice, constitutionMod, newLevel, avgHealth ) => {
    let newHealth = hitDice + ((newLevel - 1) * avgHealth) + (constitutionMod * newLevel);
    return newHealth
};

const passivePerception = (wisMod, proficiencyBonus = 0) => {
    return 10 + wisMod + proficiencyBonus
}


