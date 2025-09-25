const Usuario = require('../models/usuarios');

// Pega todos os usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.', details: error.message });
  }
};

// Pega um usuário pelo ID
exports.getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.', details: error.message });
  }
};

// Cria um novo usuário
exports.createUsuario = async (req, res) => {
  const { nome, email, senha, cargo } = req.body;
  try {
    const novoUsuario = await Usuario.create({ nome, email, senha, cargo });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.', details: error.message });
  }
};

// Atualiza um usuário existente
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, cargo } = req.body;
  try {
    const [updated] = await Usuario.update(
      { nome, email, senha, cargo },
      { where: { id: id } }
    );
    if (updated) {
      const usuarioAtualizado = await Usuario.findByPk(id);
      res.json(usuarioAtualizado);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.', details: error.message });
  }
};

// Deleta um usuário
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Usuario.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário.', details: error.message });
  }
};