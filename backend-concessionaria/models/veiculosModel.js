const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Veiculo = sequelize.define("Veiculo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("disponível", "vendido", "reservado"),
    defaultValue: "disponível",
  },
}, {
  tableName: "veiculos",
  timestamps: true,
});

module.exports = Veiculo;
