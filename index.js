const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSSequelize = require('@adminjs/sequelize'); // Adapter Sequelize

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

// ✅ Registro do adapter Sequelize (novo formato)
AdminJS.registerAdapter(AdminJSSequelize);

// ✅ Configuração do AdminJS
const admin = new AdminJS({
  rootPath: '/admin',
  resources: [Cliente, Usuario, Veiculo, Venda],
});

// ✅ Criação do router do AdminJS
const adminRouter = AdminJSExpress.buildRouter(admin);
app.use(admin.options.rootPath, adminRouter);

// ✅ Sincronização do banco e inicialização do servidor
sequelize
  .sync({ force: false }) // altere para true se quiser recriar as tabelas
  .then(() => {
    console.log('✅ Banco de dados sincronizado!');
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
      console.log(`🧭 Painel AdminJS: http://localhost:${port}${admin.options.rootPath}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao sincronizar o banco de dados:', err);
  });
