const express = require("express");
const path = require("path");

const app = express();

// setup static and middlewear
app.use(express.static("./public"))

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
//     adding to static assests
//     SSR (server set rendering)
// })

app.all("*", (req, res) => {
    res.status(404).send("request not found")
})

app.listen(5001, () => {
    console.log("server is listening on server 5001");
})