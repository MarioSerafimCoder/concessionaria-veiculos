const express = require('express');
const router = express.Router();
const veiculosController = require('../controllers/veiculosController');

router.get('/', veiculosController.getAllVeiculos);
router.get('/:id', veiculosController.getVeiculoById);
router.post('/', veiculosController.createVeiculo);
router.put('/:id', veiculosController.updateVeiculo);
router.delete('/:id', veiculosController.deleteVeiculo);

module.exports = router;
