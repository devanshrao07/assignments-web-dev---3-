// dice.js

const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

const numberOfRolls = 5;

console.log("Rolling the dice...");

for (let i = 1; i <= numberOfRolls; i++) {
    console.log(`Roll ${i}: ${rollDice()}`);
}