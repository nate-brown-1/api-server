'use strict';

const express = require('express');
const router = express.Router();
const Panda = require('../models/panda.js');
const validator = require('../middleware/validator');

router.get('/', readAllPandas);
router.get('/:', readOnePanda);
router.post('/', validator, createPanda);
router.put('/:', updatePanda);
router.delete('/:', deletePanda);

// const data = { data };

async function readAllPandas(request, response, next) {
  const allPandas = await Panda.findAll();
  console.log(allPandas.data);
  response.status(200).json(allPandas);
}

async function readOnePanda(request, response, next) {
  const id = request.params.id;
  const matchingPandas = await Panda.findAll({
    where: {
      id: id
    }
  });
  response.status(200).json(matchingPandas);
}

async function createPanda(request, response, next) {
  const newPanda = await Panda.create(request.body);
  response.status(201).send(newPanda);
}

async function updatePanda(request, response, next) {
  const id = request.params.id;
  const changedPanda = await Panda.update(request.body, {
    where: {
      id: id
    }
  });
  response.status(200).send(changedPanda);
}

async function deletePanda(request, response, next) {
  const id = request.params.id;
  const destroyedPanda = await Panda.destroy({
    where: {
      id: id
    }
  });
  response.status(200).send(destroyedPanda);
}

module.exports = router;
