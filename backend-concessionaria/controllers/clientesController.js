const Cliente = require("../models/clientesModel");

// Buscar todos os clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar clientes", details: error.message });
  }
};

// Buscar cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar cliente", details: error.message });
  }
};

// Criar cliente
exports.createCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar cliente", details: error.message });
  }
};

// Atualizar cliente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

    await cliente.update(req.body);
    res.json({ message: "Cliente atualizado", cliente });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar cliente", details: error.message });
  }
};

// Deletar cliente
exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

    await cliente.destroy();
    res.json({ message: "Cliente deletado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar cliente", details: error.message });
  }
};
