#! /usr/bin/env node

import inquirer from "inquirer";

let currentAmount = 50000; //in $
let pinCode = 4321;

const pinInput = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  }
]);

if (pinInput.pin === pinCode) {
  console.log("your pin code is correct!");


  const cashOperation = await inquirer.prompt ([
    {
        name: "operation",
        type: "list",
        choices: ["withdraw", "check balance", "fast cash"],
        message: "please select an option",
    }
  ]);

  if (cashOperation.operation === "withdraw") {
    let amountWithdrawn = await inquirer.prompt ([
        {
            name: "amount",
            type: "number",
            message: "enter the amount to be withdrawn",
        }
    ]);
    currentAmount -= amountWithdrawn.amount;
    if (amountWithdrawn.amount < 50000) {
      console.log (`your remaining balance is: ${currentAmount}`); //in template literal
    }
    else if (amountWithdrawn.amount > 50000) {
      console.log ("your balance is insufficient, please select an appropriate amount!");
    }
    else if (amountWithdrawn.amount = 50000) {
      console.log ("your remaining balance is 0");
    }
  }

  else if (cashOperation.operation === "check balance") {
    console.log(`your current balance is: ${currentAmount}`);   //in template literals 
  }

  else if (cashOperation.operation === "fast cash") {
    let fastCashWithdraw = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        choices: [1000, 5000, 10000],
        message: "select an amount to be withdrawn"
      }
    ]);
    currentAmount -= fastCashWithdraw.cash
    if (fastCashWithdraw.cash = 1000) {
      console.log(`your remaining balance is: ${currentAmount}`);
    }
    else if (fastCashWithdraw.cash = 5000) {
      console.log (`your remaining balance is: ${currentAmount}`);
    }
    else if (fastCashWithdraw.cash = 10000) {
      console.log (`your remaining balance is: ${currentAmount}`)
    }
  }
}


else {
    console.log ("your pin is incorrect!");
}
