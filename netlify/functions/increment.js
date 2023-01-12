const mysql = require("mysql2");
const bodyParser = require("body-parser");
const url = require("url");
require("dotenv").config();

exports.handler = async function (event, context) {
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  connection.query("SELECT * FROM my_counter", (error, results) => {
    if (error) {
      console.error(error);
      return;
    }

    if (results.length === 0) {
      connection.query(
        "INSERT INTO my_counter (value) VALUES (1)",
        (error, results) => {
          if (error) {
            console.error(error);
            return;
          }

          console.log(results);
        }
      );
    } else {
      console.log(results);
    }
  });

  let value = event.body === undefined ? 0 : JSON.parse(event.body).value;
  value += 1;

  // return the value
  return {
    statusCode: 200,
    body: JSON.stringify(value),
  };
};
