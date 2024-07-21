import express from "express";
import cors from "cors";
import { connect } from "mongoose";

//app config

const app = express();
const port = 4000;

//middleware

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
