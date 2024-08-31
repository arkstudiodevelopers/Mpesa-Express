const express = require("express");
const cors= require('cors')

const app = express();

const TokenRoute = require("./routes/token")
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Mpesa running");
});

app.use("/token", TokenRoute)