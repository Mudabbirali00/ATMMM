#! /usr/bin/env node

import inquirer from "inquirer";

let balance = 79651
let my_pin = 1234
let pin_check = await inquirer.prompt([
    {message: "Enter your pin", type: "number", name: "pin"},
]);

if(pin_check.pin === my_pin){
    let operation = await inquirer.prompt([
        {message: "Select any one option: ", type: "list", name: "list", choices:["Withdraw", "Check balance"]},
    ]);

if(operation.list === "Withdraw"){
    let amount = await inquirer.prompt([
        {message: "Enter your amount", type: "number", name: "amount"}
    ]);
    if(amount.amount <= balance && amount.amount >= 500){
        balance -= amount.amount;
        console.log("your remaining balance is :"+ balance);
    }
    else{
        console.log("invalid amount");
    }
}
else if (operation.list === "Check balance"){
    console.log("your balance is "+ balance)
}
}
else{
    console.log("Wrong Pin")
}