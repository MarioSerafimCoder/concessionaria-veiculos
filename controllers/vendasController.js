const Venda = require('../models/vendas');
const Cliente = require('../models/clientes');
const Veiculo = require('../models/veiculos');
const Usuario = require('../models/usuarios');

// Pega todas as vendas, incluindo dados do cliente, veículo e vendedor
exports.getAllVendas = async (req, res) => {
  try {
    const vendas = await Venda.findAll({
      include: [
        { model: Cliente, as: 'cliente' },
        { model: Veiculo, as: 'veiculo' },
        { model: Usuario, as: 'vendedor' }
      ]
    });
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar vendas.', details: error.message });
  }
};

// Pega uma venda pelo ID, incluindo dados do cliente, veículo e vendedor
exports.getVendaById = async (req, res) => {
  const { id } = req.params;
  try {
    const venda = await Venda.findByPk(id, {
      include: [
        { model: Cliente, as: 'cliente' },
        { model: Veiculo, as: 'veiculo' },
        { model: Usuario, as: 'vendedor' }
      ]
    });
    if (!venda) {
      return res.status(404).json({ error: 'Venda não encontrada.' });
    }
    res.json(venda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar venda.', details: error.message });
  }
};

// Cria uma nova venda
exports.createVenda = async (req, res) => {
  const { valor_final, id_cliente, id_veiculo, id_usuario } = req.body;
  try {
    const novaVenda = await Venda.create({ valor_final, id_cliente, id_veiculo, id_usuario });
    res.status(201).json(novaVenda);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar venda.', details: error.message });
  }
};

// Atualiza uma venda existente
exports.updateVenda = async (req, res) => {
  const { id } = req.params;
  const { valor_final, id_cliente, id_veiculo, id_usuario } = req.body;
  try {
    const [updated] = await Venda.update(
      { valor_final, id_cliente, id_veiculo, id_usuario },
      { where: { id: id } }
    );
    if (updated) {
      const vendaAtualizada = await Venda.findByPk(id);
      res.json(vendaAtualizada);
    } else {
      res.status(404).json({ error: 'Venda não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar venda.', details: error.message });
  }
};

// Deleta uma venda
exports.deleteVenda = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Venda.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Venda não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar venda.', details: error.message });
  }
};