const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuração do Sequelize e importação dos modelos
const sequelize = require('./config/database');
const Cliente = require('./models/clientes');
const Usuario = require('./models/usuarios');
const Veiculo = require('./models/veiculos');
const Venda = require('./models/vendas');

// Middleware
app.use(bodyParser.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('API Concessionária funcionando!');
});

// Rotas
const usuariosRoutes = require('./routes/usuariosRoute');
const clientesRoutes = require('./routes/clientesRoute');
const veiculosRoutes = require('./routes/veiculosRoute');
const vendasRoutes = require('./routes/vendasRoute');

app.use('/usuarios', usuariosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/veiculos', veiculosRoutes);
app.use('/vendas', vendasRoutes);

// Sincronização do banco de dados e inicialização do servidor
sequelize.sync({ force: true }) // Use { force: true } se precisar recriar as tabelas
  .then(() => {
    console.log('Banco de dados sincronizado!');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });