const express = require ("express");
const path = require ("path");

const app = express();

app.set("port", process.env.port || 3000)

app.listen(app.get("port"), () => console.log("Running port htpp://localhost:" + app.get("port")))

app.use (express.static(path.resolve(__dirname, "./public")));

app.get( "/" , (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));

app.get( "/register" , (req, res) => res.sendFile(path.resolve(__dirname, "./views/register.html")));

app.get( "/login" , (req, res) => res.sendFile(path.resolve(__dirname, "./views/login.html")));

