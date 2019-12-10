const router = require('express').Router();

const db = require("./carsDb");
const {
    validateCar,
    validateCarId
} = require("./carsMiddleware");

router.get("/", (req, res) => {
    db.get()
        .then(cars => res.json(cars))
        .catch(err => res.status(500).json({ error: "Failed to get cars data." }))
})

router.get("/:id", validateCarId, (req, res) => res.json(req.car))

router.post("/", validateCar, (req, res) => {
    db.insert(req.body)
        .then(car => res.status(201).json(car))
        .catch(err => res.status(500).json({ error: "Failed to add car to the database." }))
}) 

router.put("/:id", validateCarId, validateCar, (req, res) => {
    db.update(req.params.id, req.body)
        .then(updated => res.status(201).json(updated))
        .catch(err => res.status(500).json({ error: "Failed to update car data." }))
})

router.delete("/:id", validateCarId, (req, res) => {
    db.remove(req.params.id)
        .then(deleted => res.json(deleted))
        .catch(err => res.status(500).json({ error: "Failed to remove car from database." }))
})

module.exports = router;