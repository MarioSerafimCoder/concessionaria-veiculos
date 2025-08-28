const db = require('../db');

exports.getAllUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios_funcionarios', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getUsuarioById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM usuarios_funcionarios WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createUsuario = (req, res) => {
  const { nome, email, senha, tipo } = req.body;
  db.query(
    'INSERT INTO usuarios_funcionarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)',
    [nome, email, senha, tipo],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ id: results.insertId, nome, email, tipo });
    }
  );
};

exports.updateUsuario = (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, tipo } = req.body;
  db.query(
    'UPDATE usuarios_funcionarios SET nome=?, email=?, senha=?, tipo=? WHERE id=?',
    [nome, email, senha, tipo, id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Usuário atualizado' });
    }
  );
};


exports.deleteUsuario = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios_funcionarios WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Usuário deletado' });
  });
};
