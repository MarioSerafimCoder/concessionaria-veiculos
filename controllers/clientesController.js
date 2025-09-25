const Cliente = require('../models/clientes');

// Pega todos os clientes do banco de dados
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes.', details: error.message });
  }
};

// Pega um cliente pelo ID
exports.getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente.', details: error.message });
  }
};

// Cria um novo cliente
exports.createCliente = async (req, res) => {
  const { nome, CPF, email, telefone, endereco, id_funcionario } = req.body;
  try {
    const novoCliente = await Cliente.create({ nome, CPF, email, telefone, endereco, id_funcionario });
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar cliente.', details: error.message });
  }
};

// Atualiza um cliente existente
exports.updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, CPF, email, telefone, endereco, id_funcionario } = req.body;
  try {
    const [updated] = await Cliente.update(
      { nome, CPF, email, telefone, endereco, id_funcionario },
      { where: { id: id } }
    );
    if (updated) {
      const clienteAtualizado = await Cliente.findByPk(id);
      res.json(clienteAtualizado);
    } else {
      res.status(404).json({ error: 'Cliente não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente.', details: error.message });
  }
};

// Deleta um cliente
exports.deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Cliente.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Cliente não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar cliente.', details: error.message });
  }
};