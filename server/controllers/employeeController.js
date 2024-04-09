const mysql = require("mysql2/promise");
const dbConfig = require("../db");

const pool = mysql.createPool(dbConfig);

module.exports = {
  async getAllEmployees() {
    try {
      const connection = await pool.getConnection();
      const [results, fields] = await connection.query(
        "SELECT * FROM employees"
      );
      console.log(results);
      connection.release();
      return results;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },
  async getEmployeeById(employeeId) {
    try {
      const connection = await pool.getConnection();
      const [results, fields] = await connection.query(
        "SELECT * FROM employees WHERE employee_id = ?",
        [employeeId]
      );
      console.log(results);
      connection.release();
      return results;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },
};
