const db = require('../db');

exports.getAllVeiculos = (req, res) => {
  db.query('SELECT * FROM cadastro_veiculo', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getVeiculoById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM cadastro_veiculo WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

exports.createVeiculo = (req, res) => {
  const { modelo, ano, placa, status, valor, id_funcionario } = req.body;
  db.query(
    'INSERT INTO cadastro_veiculo (modelo, ano, placa, status, valor, id_funcionario) VALUES (?, ?, ?, ?, ?, ?)',
    [modelo, ano, placa, status, valor, id_funcionario],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ id: results.insertId, modelo, placa });
    }
  );
};

exports.updateVeiculo = (req, res) => {
  const { id } = req.params;
  const { modelo, ano, placa, status, valor, id_funcionario } = req.body;
  db.query(
    'UPDATE cadastro_veiculo SET modelo=?, ano=?, placa=?, status=?, valor=?, id_funcionario=? WHERE id=?',
    [modelo, ano, placa, status, valor, id_funcionario, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Veículo atualizado' });
    }
  );
};

exports.deleteVeiculo = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM cadastro_veiculo WHERE id=?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Veículo deletado' });
  });
};
