const express = require('express');
const router = express.Router();

const attractionResource = require('../resources/attraction');

router.get('/', attractionResource.findAll);
// router.get('/:id', attractionResource.getById);
router.post('/', attractionResource.save);
router.delete('/:id', attractionResource.delete);

module.exports = router;
