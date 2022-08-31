import express from "express";
import bodyParser from "body-parser";
import routes from "./users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", routes);

app.listen(PORT, ()=>console.log("SERVER IS RUNNING"));