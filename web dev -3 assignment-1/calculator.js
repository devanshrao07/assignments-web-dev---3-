// calculator.js

const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (!operation || Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <number1> <number2>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit(1);
}

switch (operation) {
    case "add":
        console.log("Result:", num1 + num2);
        break;

    case "subtract":
        console.log("Result:", num1 - num2);
        break;

    case "multiply":
        console.log("Result:", num1 * num2);
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log("Result:", num1 / num2);
        }
        break;

    default:
        console.log("Invalid operation.");
        console.log("Use: add, subtract, multiply, divide");
}