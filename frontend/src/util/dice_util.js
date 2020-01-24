export const dStat = () => {
    let a = d6();
    let b = d6();
    let c = d6();
    let d = d6();
    let rolls = [a, b, c, d];
    let sortedRolls = rolls.sort(function(x,y) { return y-x })
    let threeRolls = sortedRolls.splice(0,3)
    return threeRolls.reduce((a,b) => a + b, 0)
};

export const roll = (x = 1, dieNum) => {
    let total = 0;
    for (let i = 0; i < x; i++) {
        total += Math.floor(Math.random() * dieNum) + 1
    }
    return total
};

export const d4 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 4) + 1
    }
    return total
};

export const d6 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 6) + 1
    }
    return total
};

export const d8 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 8) + 1
    }
    return total
};

export const d10 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 10) + 1
    }
    return total
};

export const d12 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 10) + 1
    }
    return total
};

export const d20 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 20) + 1
    }
    return total
};

export const d100 = (x = 1) => {
    let total = 0;
    for (let i = 0; i < x ; i ++) {
        total += Math.floor(Math.random() * 100) + 1
    }
    return total
};