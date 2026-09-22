const express = require("express");
const router = express.Router();

const students = require("../data/students");

// GET all
router.get("/", (req, res) => {
    res.json(students);
});

// GET one
router.get("/:id", (req, res) => {
    let student = students.find(s => s.id == req.params.id);

    if (!student)
        return res.status(404).send("Student not found");

    res.json(student);
});

// POST
router.post("/", (req, res) => {
    let student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.status(201).json(student);
});

// PUT
router.put("/:id", (req, res) => {
    let student = students.find(s => s.id == req.params.id);

    if (!student)
        return res.status(404).send("Student not found");

    student.name = req.body.name;
    student.age = req.body.age;

    res.json(student);
});

// DELETE
router.delete("/:id", (req, res) => {
    let index = students.findIndex(s => s.id == req.params.id);

    if (index == -1)
        return res.status(404).send("Student not found");

    students.splice(index, 1);

    res.send("Student deleted");
});

module.exports = router;