'use strict';

const express = require('express');
const router = express.Router();
const Octopus = require('../models/octopus.js');
const validator = require('../middleware/validator');

router.get('/octopus', readAllOctopuses);
router.get('/octopus:id', readOctopus);
router.post('/octopus', validator, createOctopus);
router.put('/octopus:id', updateOctopus);
router.delete('/octopus:id', deleteOctopus);

// const data = { data };

async function readAllOctopuses(request, response, next) {
  const allOctopuses = await Octopus.findAll();
  console.log(allOctopuses.data);
  response.status(200).json(allOctopuses);
}

async function readOctopus(request, response, next) {
  const id = request.params.id;
  const matchingOctopuses = await Octopus.findAll({
    where: {
      id: id
    }
  });
  response.status(200).json(matchingOctopuses);
}

async function createOctopus(request, response, next) {
  const newOctopus = await Octopus.create(request.body);
  response.status(201).send(newOctopus);
}

async function updateOctopus(request, response, next) {
  const id = request.params.id;
  const changedOctopus = await Octopus.update(request.body, {
    where: {
      id: id
    }
  });
  response.status(200).send(changedOctopus);
}

async function deleteOctopus(request, response, next) {
  const id = request.params.id;
  const destroyedOctopus = await Octopus.destroy(request.body, {
    where: {
      id: id
    }
  });
  response.status(200).send(destroyedOctopus);
}

module.exports = router;
