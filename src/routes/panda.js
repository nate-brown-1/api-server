'use strict';

const express = require('express');
const router = express.Router();
const { Panda } = require('../models/panda');
const validator = require('../middleware/validator');

router.get('/', readPanda);
router.post('/', validator, createPanda);
router.put('/', updatePanda);
router.delete('/', deletePanda);

// const data = { data };

async function readPanda(request, response, next) {
  let data = await Panda.findAll();
  response.status(200).json(data);
}

async function createPanda(request, response, next) {
  const pandaToCreate = await Panda.create(request.body);
  response.status(200).send(pandaToCreate);
}

async function updatePanda(request, response, next) {
  const pandaToUpdate = await Panda.update(request.body);
  response.status(200).send(pandaToUpdate);
}

async function deletePanda(request, response, next) {
  const pandaToDelete = await Panda.delete(request.body);
  response.status(200).send(pandaToDelete);
}

module.exports = router;
