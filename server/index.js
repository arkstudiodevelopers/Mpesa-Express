const express = require("express");

const app = express();

const TokenRoute = require("./routes/token")
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Mpesa running");
});

app.use("/token", TokenRoute)