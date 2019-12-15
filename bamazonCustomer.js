const inquirer = require("inquirer");
const mysql = require("mysql");
const chalk = require("chalk");

let chosenItem = {};
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  queryShop();
});

function queryShop() {
  connection.query(`SELECT * FROM products`, (err, res) => {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      console.log(
        `${res[i].id} | ${res[i].product_name} | ${res[i].department_name} | ${res.price_consumer} | ${res[i].stock_quantity}`
      );
    }
    runShop();
  });
}

function runShop() {
  connection.query(`SELECT * FROM products`, (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the ID of the product you wish to purchase",
          name: "id"
        },
        {
          type: "input",
          message: "Enter the quantity you wish to purchase",
          name: "quantity"
        }
      ])
      .then(answer => {
        let userItem = parseFloat(answer.id) - 1;

        if (userItem > res.length - 1 || userItem < 0) {
          connection.end();
          console.log(chalk.bold.red("Please Enter a Valid ID Number."));
        } else {
          if (
            answer.quantity > res[userItem].stock_quantity ||
            answer.quantity <= 0 ||
            res[userItem].stock_quantity === 0
          ) {
            connection.end();
            console.log(chalk.bold.red("Please Enter a Sufficient Quantity."));
          } else {
            chosenItem = {
              id: res[userItem].id,
              product_name: res[userItem].product_name,
              department_name: res[userItem].department_name,
              price_consumer: res[userItem].price_consumer,
              stock_quantity: res[userItem].stock_quantity,
              chosen_quantity: parseFloat(answer.quantity)
            };
            console.log(chosenItem);
            updateStock();
          }
        }
      });
  });
}

function updateStock() {
  let newStockQuantity = chosenItem.stock_quantity - chosenItem.chosen_quantity;
  let id = chosenItem.id;
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [{ stock_quantity: newStockQuantity }, { id: id }],
    function(err, res) {
      if (err) throw err;
    }
  );
}
