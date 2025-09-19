const Veiculo = require("../models/veiculosModel");

// Buscar todos os veículos
exports.getAllVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar veículos", details: error.message });
  }
};

// Buscar veículo por ID
exports.getVeiculoById = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).json({ error: "Veículo não encontrado" });
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar veículo", details: error.message });
  }
};

// Criar veículo
exports.createVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.create(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar veículo", details: error.message });
  }
};

// Atualizar veículo
exports.updateVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).json({ error: "Veículo não encontrado" });

    await veiculo.update(req.body);
    res.json({ message: "Veículo atualizado", veiculo });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar veículo", details: error.message });
  }
};

// Deletar veículo
exports.deleteVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (!veiculo) return res.status(404).json({ error: "Veículo não encontrado" });

    await veiculo.destroy();
    res.json({ message: "Veículo deletado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar veículo", details: error.message });
  }
};
