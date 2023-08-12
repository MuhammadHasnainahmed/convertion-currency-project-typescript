import inquirer from "inquirer";
let converter = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1,
    },
    "USD": {
        "PKR": 288,
        "GBP": 0.83,
        "USD": 1,
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Select your convertion amount:"
    },
]);
const { From, to, amount } = answer;
if (From && to && amount) {
    let result = converter[From][to] * amount;
    console.log(`your convertion ${From} to ${to} is ${result}`);
}
else {
    console.log("invalid input");
}
