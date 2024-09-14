// routes/queryRoute.js
import express from "express";
import Query from "../models/queryModel.js";

const router = express.Router();

// Submit query
router.post("/", async (req, res) => {
  try {
    const { name, gmail, query } = req.body;
    const newQuery = new Query({ name, gmail, query });
    await newQuery.save();
    res.status(201).send("Query submitted successfully");
  } catch (error) {
    res.status(500).json({ message: "Failed to submit query" });
  }
});

// Get all queries for staff dashboard
router.get("/", async (req, res) => {
  try {
    const queries = await Query.find();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch queries" });
  }
});

export default router;
