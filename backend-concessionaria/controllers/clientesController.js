const db = require('../db');

exports.getAllClientes = (req, res) => {
  db.query('SELECT * FROM registros_clientes', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getClienteById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM registros_clientes WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createCliente = (req, res) => {
  const { nome, CPF, email, telefone, endereco, id_funcionario } = req.body;
  db.query(
    'INSERT INTO registros_clientes (nome, CPF, email, telefone, endereco, id_funcionario) VALUES (?, ?, ?, ?, ?, ?)',
    [nome, CPF, email, telefone, endereco, id_funcionario],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ id: results.insertId, nome, CPF });
    }
  );
};

exports.updateCliente = (req, res) => {
  const { id } = req.params;
  const { nome, CPF, email, telefone, endereco, id_funcionario } = req.body;
  db.query(
    'UPDATE registros_clientes SET nome=?, CPF=?, email=?, telefone=?, endereco=?, id_funcionario=? WHERE id=?',
    [nome, CPF, email, telefone, endereco, id_funcionario, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Cliente atualizado' });
    }
  );
};

exports.deleteCliente = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM registros_clientes WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Cliente deletado' });
  });
};
