require("dotenv").config(); // Import and load dotenv

const mysql = require("mysql2");

const dbHost = process.env.DB_HOST || "localhost";
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_Name;

const con = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
});

const dbConfig = {
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
};

// Connect to the database
con.connect(function (err) {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log(`Connected to ${dbName} successfully!`);
});

module.exports = dbConfig;
