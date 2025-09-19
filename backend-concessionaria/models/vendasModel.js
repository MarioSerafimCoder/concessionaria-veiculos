const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Cliente = require("./clientesModel");
const Usuario = require("./usuariosModel");
const Veiculo = require("./veiculosModel");

const Venda = sequelize.define("Venda", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dataVenda: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  valorTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: "vendas",
  timestamps: true,
});

// Relacionamentos
Cliente.hasMany(Venda, { foreignKey: "clienteId" });
Venda.belongsTo(Cliente, { foreignKey: "clienteId" });

Usuario.hasMany(Venda, { foreignKey: "usuarioId" });
Venda.belongsTo(Usuario, { foreignKey: "usuarioId" });

Veiculo.hasOne(Venda, { foreignKey: "veiculoId" });
Venda.belongsTo(Veiculo, { foreignKey: "veiculoId" });

module.exports = Venda;
