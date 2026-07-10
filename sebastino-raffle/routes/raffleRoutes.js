import express from "express";
import db from "../config/db.js";


const router = express.Router();

console.log("✅ raffleRoutes.js loaded");

router.get("/", (req, res) => {
  res.send("Raffle API Working!");
});

router.post("/register", (req, res) => {
  const {
    student_number,
    full_name,
    college,
    course,
    year_level,
    facebook_name,
  } = req.body;

  const checkSql =
    "SELECT * FROM participants WHERE student_number = ?";

  db.query(checkSql, [student_number], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.length > 0) {
      return res.status(400).json({
        message: "Student already registered.",
      });
    }

    const insertSql = `
      INSERT INTO participants
      (
        student_number,
        full_name,
        college,
        course,
        year_level,
        facebook_name
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertSql,
      [
        student_number,
        full_name,
        college,
        course,
        year_level,
        facebook_name,
      ],
      (err, result) => {
        if (err) {
          console.log("INSERT ERROR");
          console.log(err);

          return res.status(500).json({
            message: "Failed to save registration.",
          });
        }

        console.log("✅ Student Registered!");
        console.log(result);

        res.json({
          success: true,
          message: "Registration successful!",
        });
      }
    );
  });
});

export default router;