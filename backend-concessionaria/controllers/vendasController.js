const Venda = require("../models/vendasModel");
const Cliente = require("../models/clientesModel");
const Usuario = require("../models/usuariosModel");
const Veiculo = require("../models/veiculosModel");

// Buscar todas as vendas
exports.getAllVendas = async (req, res) => {
  try {
    const vendas = await Venda.findAll({
      include: [Cliente, Usuario, Veiculo],
    });
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar vendas", details: error.message });
  }
};

// Buscar venda por ID
exports.getVendaById = async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id, {
      include: [Cliente, Usuario, Veiculo],
    });
    if (!venda) return res.status(404).json({ error: "Venda não encontrada" });
    res.json(venda);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar venda", details: error.message });
  }
};

// Criar venda
exports.createVenda = async (req, res) => {
  try {
    const venda = await Venda.create(req.body);
    res.status(201).json(venda);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar venda", details: error.message });
  }
};

// Atualizar venda
exports.updateVenda = async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (!venda) return res.status(404).json({ error: "Venda não encontrada" });

    await venda.update(req.body);
    res.json({ message: "Venda atualizada", venda });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar venda", details: error.message });
  }
};

// Deletar venda
exports.deleteVenda = async (req, res) => {
  try {
    const venda = await Venda.findByPk(req.params.id);
    if (!venda) return res.status(404).json({ error: "Venda não encontrada" });

    await venda.destroy();
    res.json({ message: "Venda deletada" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar venda", details: error.message });
  }
};
