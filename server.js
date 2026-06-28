import express from "express";
import * as pgp from "./node_modules/pg-promise/typescript/pg-promise";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
});
