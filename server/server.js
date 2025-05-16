import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Ticket App Server!");
});

app.listen(3004, () => {
  console.log("Server is running on PORT 3004");
});
