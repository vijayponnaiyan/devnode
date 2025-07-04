const express = require("express");
const app = express();
const port = 3000;

// app.get(/.*fly$/, (req, res) => res.send("Hello  fools"));

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params); // correctly logs the URL parameters
  res.send({
    FirstName: "vijay",
    age: "30",
    address: "12/13 MCSR Street, Kumbakonam", // corrected spelling
  });
});

app.use("/hello", (req, res) => res.send("Hello  fools"));

app.use("/fool/2", (req, res) => res.send("cool amder codbura"));
app.use("/test", (req, res) => res.send("Hello World!"));

app.get("/", (req, res) => {
  res.send("super");
});

// app.use((req, res) => res.send("Hello World!    super"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
