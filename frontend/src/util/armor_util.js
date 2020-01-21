const armorTypes = ["none", "padded (light)", "leather (light)", "studded leather (light)", "hide (medium)", "chain shirt (medium)", "scale mail (medium)", "breastplate (medium)", "half plate (medium)", "ring mail (heavy)", "chain mail (heavy)", "splint (heavy)", "plate (heavy)"]

const armorClass = ( armor, dexMod, shield ) => {

    let shieldBonus = 0;

    if (shield) {
        shieldBonus += 2
    }; 

    if (armor.type === "none") {
        return 10 + dexMod + shieldBonus
    };

    if (armor.type === "light") {
        return armor.base + dexMod + shieldBonus
    };

    if (armor.type === "medium") {
        let mod;
        if (dexMod > 2) {
            mod = 2
        } else {
            mod = dexMod
        };
        return armor.base + mod + shieldBonus
    };

    if (armor.type === "heavy") {
        return armor.base + shieldBonus
    };
}; 

const noArmor = {
    base: 10,
    type: "none"
};

const padded = {
    base: 11,
    type: "light"
};

const leather = {
    base: 11,
    type: "light"
};

const studdedLeather = {
    base: 12,
    type: "light"
};

const hide = {
    base: 12,
    type: "medium"
};

const chainShirt = {
    base: 13,
    type: "medium"
},

const scaleMail = {
    base: 14,
    type: "medium"
};

const breastplate = {
    base: 14,
    type: "medium"
};

const halfPlate = {
    base: 15,
    type: "medium"
};

const ringMail = {
    base: 14,
    type: "heavy"
};

const chainMail = {
    base: 16,
    type: "heavy"
};

const splint = {
    base: 17,
    type: "heavy"
};

const plate = {
    base: 18,
    type: "heavy"
};


