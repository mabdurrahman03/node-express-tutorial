const express = require("express")
const router = express.Router()
let { people } = require("../data")

// people data
router.get("/", (req, res) => {
    res.status(200).json({ seccess: true, data: people })
})

// submitting name in javascript page
router.post("/", (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" })
    }
    res.status(201).json({ success: true, person: name })
})

// using postman method
router.post("/postman", (req, res) => {
    console.log(req.body);
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name" })
    }
    res.status(201).json({ success: true, data: { ...people, name } })
})

// modifying data for people
router.put("/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, data: newPeople })
})

router.delete("/:id", (req, res) => {
    const person = people.find((person) => person.id === Number([req.params.id]))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` })
    }

    const newPeople = people.filter((person) => person.id !== Number([req.params.id]))
    return res.status(200).json({ status: true, data: newPeople })
})

module.exports = router
