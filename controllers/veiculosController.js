const Veiculo = require('../models/veiculos');

// Pega todos os veículos
exports.getAllVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículos.', details: error.message });
  }
};

// Pega um veículo pelo ID
exports.getVeiculoById = async (req, res) => {
  const { id } = req.params;
  try {
    const veiculo = await Veiculo.findByPk(id);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado.' });
    }
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículo.', details: error.message });
  }
};

// Cria um novo veículo
exports.createVeiculo = async (req, res) => {
  const { marca, modelo, ano, cor, placa, valor } = req.body;
  try {
    const novoVeiculo = await Veiculo.create({ marca, modelo, ano, cor, placa, valor });
    res.status(201).json(novoVeiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar veículo.', details: error.message });
  }
};

// Atualiza um veículo existente
exports.updateVeiculo = async (req, res) => {
  const { id } = req.params;
  const { marca, modelo, ano, cor, placa, valor } = req.body;
  try {
    const [updated] = await Veiculo.update(
      { marca, modelo, ano, cor, placa, valor },
      { where: { id: id } }
    );
    if (updated) {
      const veiculoAtualizado = await Veiculo.findByPk(id);
      res.json(veiculoAtualizado);
    } else {
      res.status(404).json({ error: 'Veículo não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar veículo.', details: error.message });
  }
};

// Deleta um veículo
exports.deleteVeiculo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Veiculo.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Veículo não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar veículo.', details: error.message });
  }
};