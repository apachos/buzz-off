const express = require('express');
const router = express.Router();

const attractionResource = require('../resource/attractions');

router.get('/', attractionResource.getAll);
router.get('/:id', attractionResource.getById);

module.exports = router;
