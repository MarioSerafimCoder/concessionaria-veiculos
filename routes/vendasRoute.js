const express = require('express');
const router = express.Router();
const vendasController = require('../controllers/vendasController');

router.get('/', vendasController.getAllVendas);
router.get('/:id', vendasController.getVendaById);
router.post('/', vendasController.createVenda);
router.put('/:id', vendasController.updateVenda);
router.delete('/:id', vendasController.deleteVenda);

module.exports = router;