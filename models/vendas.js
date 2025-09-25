
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./clientes');
const Veiculo = require('./veiculos'); 
const Usuario = require('./usuarios'); 
const Venda = sequelize.define('Venda', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  valor_final: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
}, {
  tableName: 'vendas' 
});


Venda.belongsTo(Cliente, {
  foreignKey: 'id_cliente',
  as: 'cliente'
});
Venda.belongsTo(Veiculo, {
  foreignKey: 'id_veiculo',
  as: 'veiculo'
});
Venda.belongsTo(Usuario, {
  foreignKey: 'id_usuario',
  as: 'vendedor'
});

module.exports = Venda;