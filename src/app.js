const express = require("express");
const app = express();
const port = 3000;

app.use("/hello", (req, res) => res.send("Hello  fools"));

app.use("/fool", (req, res) => res.send("cool"));
app.use("/test", (req, res) => res.send("Hello World!"));
app.use((req, res) => res.send("Hello World!    super"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
