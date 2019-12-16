exports.seed = function(knex) {
    return knex('cars').truncate()
      .then(function () {
        return knex('cars').insert([
          { VIN: 123459876, make: "Toyota", model: "Corolla", mileage: 123456 },
          { VIN: 987654321, make: "Kia", model: "Rio", mileage: 123456, title: "clean" },
          { VIN: 123456789, make: "Chevrolet", model: "Silverado", mileage: 254000, title: "clean" }
        ]);
      });
  };