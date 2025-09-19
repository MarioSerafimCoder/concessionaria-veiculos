const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Usuario = sequelize.define("Usuario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.ENUM("vendedor", "gerente", "admin"),
    allowNull: false,
  },
}, {
  tableName: "usuarios",
  timestamps: true,
});

module.exports = Usuario;
