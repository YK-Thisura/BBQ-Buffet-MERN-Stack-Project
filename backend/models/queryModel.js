// models/queryModel.js
import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gmail: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Query = mongoose.model("Query", querySchema);

export default Query;
