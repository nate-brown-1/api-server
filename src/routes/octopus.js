'use strict';

const express = require('express');
const router = express.Router();
const { Octopus } = require('../models/octopus');
const validator = require('../middleware/validator');

router.get('/', readOctopus);
router.post('/', validator, createOctopus);
router.put('/', updateOctopus);
router.delete('/', deleteOctopus);

// const data = { data };

async function readOctopus(request, response, next) {
  let data = await Octopus.findAll();
  response.status(200).json(data);
}

async function createOctopus(request, response, next) {
  const octopusToCreate = await Octopus.create(request.body);
  response.status(200).send(octopusToCreate);
}

async function updateOctopus(request, response, next) {
  const octopusToUpdate = await Octopus.update(request.body);
  response.status(200).send(octopusToUpdate);
}

async function deleteOctopus(request, response, next) {
  const octopusToDelete = await Octopus.delete(request.body);
  response.status(200).send(octopusToDelete);
}

module.exports = router;
