const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// router.post("/create", employeeController.createEmployee);
router.get("/", async (req, res) => {
  try {
    const employees = await employeeController.getAllEmployees();
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching employees" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employees = await employeeController.getEmployeeById(employeeId);
    res.json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching employees" });
  }
});
router.get("/:id", employeeController.getEmployeeById);
// router.patch("/update/:id", employeeController.updateEmployee);
// router.delete("/delete/:id", employeeController.deleteEmployee);

module.exports = router;
