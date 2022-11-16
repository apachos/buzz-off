const express = require('express');
const router = express.Router();

const attractionResource = require('../resources/attraction');

router.get('/', attractionResource.findAll);
// router.get('/:id', attractionResource.getById);

module.exports = router;
