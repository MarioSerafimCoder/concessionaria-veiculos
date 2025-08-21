const db = require('../db');

exports.getAllVendas = (req, res) => {
  db.query('SELECT * FROM vendas', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getVendaById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM vendas WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createVenda = (req, res) => {
  const { id_cliente, id_veiculo, id_usuario, data_venda, valor_total, forma_pagamento } = req.body;
  db.query(
    'INSERT INTO vendas (id_cliente, id_veiculo, id_usuario, data_venda, valor_total, forma_pagamento) VALUES (?, ?, ?, ?, ?, ?)',
    [id_cliente, id_veiculo, id_usuario, data_venda, valor_total, forma_pagamento],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ id: results.insertId });
    }
  );
};

exports.updateVenda = (req, res) => {
  const { id } = req.params;
  const { id_cliente, id_veiculo, id_usuario, data_venda, valor_total, forma_pagamento } = req.body;
  db.query(
    'UPDATE vendas SET id_cliente=?, id_veiculo=?, id_usuario=?, data_venda=?, valor_total=?, forma_pagamento=? WHERE id=?',
    [id_cliente, id_veiculo, id_usuario, data_venda, valor_total, forma_pagamento, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Venda atualizada' });
    }
  );
};

exports.deleteVenda = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM vendas WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Venda deletada' });
  });
};
