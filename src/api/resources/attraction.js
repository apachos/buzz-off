// const Attractions = require('../gateways/attraction');

// exports.getAll = (req, res, next) => {
//   Attractions.find()
//     .then(attractions => {
//       res.status(200).json(attractions);
//     })
//     .catch(() => {
//       res.status(500).send(new Error('Kaboom!'));
//     });
// };

// exports.getById = (req, res, next) => {
//   Attractions.findById(req.params.id)
//     .then(attraction => {
//       if (!attraction) {
//         return res.status(404).send(new Error('Attraction not found!'));
//       }
//       res.status(200).json(attraction);
//     })
//     .catch(() => {
//       res.status(500).send(new Error('Kerblach!'));
//     });
// };

const Attraction = require('../models/attraction');
const { tryOperation } = require('./');

exports.findAll = (req, res) => {
  tryOperation(res, async () => {
    const sauces = await Attraction.find();

    res.status(200).json(sauces);
  });
};
