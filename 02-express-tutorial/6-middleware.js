const express = require("express")
const app = express()
const morgan = require("morgan")
const logger = require("./logger") // Calling logger.js
const authorize = require("./authorize") // Calling authorize.js

// req => middleware => res

// 1. Use vs route
// 2. Options - our own / express / third party

// How to call logger and authorize once and use it in all app functions locally
// app.use([logger, authorize])

// call public as an asset
// app.use(express.static("./public"))

// third party middleware function "morgan"
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send("Products")
})

app.get("/api/items", (req, res) => {
    console.log(req.user)
    res.send("Items")
})

app.listen(5001, () => {
    console.log("server is listening on port 5001")
})