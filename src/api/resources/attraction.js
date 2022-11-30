const uuid = require('uuid/v1');
const { Attraction, Address } = require('../models/index');
const { tryOperation } = require('./');

exports.findAll = (req, res) => {
  tryOperation(res, async () => {
    const attractions = await Attraction.findAll({
      attributes: { exclude: ['addressId', 'createdAt', 'updatedAt'] },
      include: {
        model: Address,
        as: 'address',
        attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
      },
    });

    res.status(200).json(attractions);
  });
};

exports.save = (req, res) => {
  tryOperation(res, async () => {
    const attraction = new Attraction(
      {
        id: uuid(),
        name: req.body.name,
        description: req.body.description,
        address: {
          street: req.body.address.street,
          city: req.body.address.city,
          state: req.body.address.state,
          zip: req.body.address.zip,
        },
        site: req.body.site,
        rank: req.body.rank,
      },
      { include: { model: Address, as: 'address' } }
    );

    await attraction.save();
    res.status(201).json({ message: 'Attraction saved successfuly!' });
  });
};

exports.delete = (req, res) => {
  tryOperation(res, async () => {
    const id = req.params.id;
    const attraction = await Attraction.findOne({ where: { id } });

    if (attraction) {
      await Address.destroy({ where: { id: attraction.addressId } });
      await attraction.destroy();
      res.status(200).json({ message: 'Deleted!' });
    } else {
      res.status(400).json({ error: `No attraction found for '${id}'` });
    }
  });
};
