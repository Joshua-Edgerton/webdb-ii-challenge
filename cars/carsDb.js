const db = require("../data/dbConfig");

const get = (id) => {
    return id
        ? db('cars').where({ id }).first()
        : db('cars');
}

const insert = (car) => {
    return db('cars')
        .insert(car)
        .then(([id]) => get(id))
}

const update = (id, updatedCar) => {
    return db('cars')
        .where({ id })
        .update(updatedCar)
        .then(() => get(id))
}

const remove = (id) => {
    return db('cars')
        .where({ id })
        .del();
}

module.exports = {
    get,
    insert,
    update,
    remove
}