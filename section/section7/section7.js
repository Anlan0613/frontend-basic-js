const character = {
    id : 1,
    name : "スライム",
    hp : 50,
};

const addMP = (value) => {
    return {
        ...character,
        mp : value
    }
};

const updateHP = () => {
    const updatedHP = character.hp - 15;
    return {
       ...character,
        hp : updatedHP
    }
};

const LookUpName = () => {
    return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
