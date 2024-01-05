const express = require("express");
const app = express();
const { connection } = require("./connection");
const PORT = 1000;
const router = require("./routes/route");
app.use(express.json());
connection(
  "mongodb+srv://bhuppi:bhuppi@cluster0.5cg7eez.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/url", router);

app.listen(PORT, () => console.log("Server connected"));
