const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rota raiz
app.get('/', (req, res) => {
    res.send('API Concessionária funcionando!');
});

// Rotas
const usuariosRoutes = require('./routes/usuarios');
const clientesRoutes = require('./routes/clientes');
const veiculosRoutes = require('./routes/veiculos');
const vendasRoutes = require('./routes/vendas');

app.use('/usuarios', usuariosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/veiculos', veiculosRoutes);
app.use('/vendas', vendasRoutes);

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
