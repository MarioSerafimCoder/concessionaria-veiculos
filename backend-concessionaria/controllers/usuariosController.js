const Usuario = require("../models/usuariosModel");

// Buscar todos os usuários
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários", details: error.message });
  }
};

// Buscar usuário por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário", details: error.message });
  }
};

// Criar usuário
exports.createUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário", details: error.message });
  }
};

// Atualizar usuário
exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });

    await usuario.update(req.body);
    res.json({ message: "Usuário atualizado", usuario });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário", details: error.message });
  }
};

// Deletar usuário
exports.deleteUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });

    await usuario.destroy();
    res.json({ message: "Usuário deletado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário", details: error.message });
  }
};
