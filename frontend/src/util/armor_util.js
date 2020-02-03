export const armorTypes = ["none", "padded (light)", "leather (light)", "studded leather (light)", "hide (medium)", "chain shirt (medium)", "scale mail (medium)", "breastplate (medium)", "half plate (medium)", "ring mail (heavy)", "chain mail (heavy)", "splint (heavy)", "plate (heavy)"]

export const armorClass = ( armor, dexMod, shield ) => {
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

export const fullArmor = {

    noArmor: {
        base: 10,
        type: "none"
    },

    padded: {
        base: 11,
        type: "light"
    },

    leather: {
        base: 11,
        type: "light"
    },

    studdedLeather: {
        base: 12,
        type: "light"
    },

    hide: {
        base: 12,
        type: "medium"
    },

    chainShirt: {
        base: 13,
        type: "medium"
    },

    scaleMail: {
        base: 14,
        type: "medium"
    },

    breastplate: {
        base: 14,
        type: "medium"
    },

    halfPlate: {
        base: 15,
        type: "medium"
    },

    ringMail: {
        base: 14,
        type: "heavy"
    },

    chainMail: {
        base: 16,
        type: "heavy"
    },

    splint: {
        base: 17,
        type: "heavy"
    },

    plate: {
        base: 18,
        type: "heavy"
    }

}
