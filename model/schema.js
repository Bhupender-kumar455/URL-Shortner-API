const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortid: {
      type: String,
      required: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Date, default: Date.now() },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("urls", urlSchema);

module.exports = URL;
