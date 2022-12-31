//dependencies
const express = require('express')
const cors = require("cors")

//import json files
const projects = require("./projects.json")
const about = require("./about.json")

//create app object
const app = express()

//set up middleware
app.use(cors())

//home route
app.get("/", (req, res) => {
    res.send("hello world")
})

//rout for retrieving projects
app.get("/projects", (req,res) => {
    //send projects via JSON
    res.json(projects)
})

//rout for retrieving about
app.get("/about", (req,res) => {
    //send about via JSON
    res.json(about)
})

//portnumber variable
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log (`linsten'n on port ${PORT}`))
