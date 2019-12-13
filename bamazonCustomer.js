const inquirer = require("inquirer");
const mysql = require("mysql");

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
  });
}

function runShop() {
  connection.query(`SELECT * FROM products`, (err, res) => {
    if (err) throw err;
    inquirer
      .prompt({
        type: "input",
        message: "Enter the ID of the product you wish to purchase",
        name: "id",

        testIdEntry: function valid(value) {
          if (value > 0 && value <= 10 && !isNaN(value)) {
            return true;
          } else {
            console.log("Please enter a value from 1 - 10. Thank You.");
            return false;
          }
        }
      })
      .then(answer => {});
  });
}
