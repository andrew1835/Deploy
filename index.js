const express = require("express")

const app = express();
// The below should be the boiler plate for all your port definitions. Will fix any Hiroku bugs
const PORT = process.env.PORT||3000;

const PORT = 3000

const turtles = [
    {
        name: "Leo",
        isTeenageMutant : true
    }
]

app.get("/", function(req, res) {
    res.send("Welcome to my site!")
})

app.get("/turtles", function(req, res) {
    res.json(turtles)
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})