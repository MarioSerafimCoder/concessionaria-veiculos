const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const sequelize = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

Promise.all([
    import('adminjs'),
    import('@adminjs/sequelize'),
    import('@adminjs/express')
]).then( async ([{default: AdminJS}, AdminDB, AdminExpress]) => {
    const { Adapter, Database, Resource } = AdminDB;

    AdminJS.registerAdapter({
        Database,
        Resource
    });

})

    //configurando a conexão entre o AdminJS e a nossa base (com a nossa conexao)
    const db = await new Adapter('mysql2', connectionData).init();

    //mapear quais recursos/tabelas do banco serão gerados os cruds
    const admin = new AdminJS({
        resources: [
            {
                resource: db.table('clientes'),
                options: {} // definir alguma action a nao ser feita
            },
            {
                resource: db.table('usuarios'),
                options: {} // definir alguma action a nao ser feita
            }
        ]
    });

    admin.watch();


app.get("/", (req, res) => {
  res.send("API Concessionária funcionando!");
});

const usuariosRoutes = require("./routes/usuariosRoute");
const clientesRoutes = require("./routes/clientesRoute");
const veiculosRoutes = require("./routes/veiculosRoute");
const vendasRoutes = require("./routes/vendasRoute");

app.use("/usuarios", usuariosRoutes);
app.use("/clientes", clientesRoutes);
app.use("/veiculos", veiculosRoutes);
app.use("/vendas", vendasRoutes);


sequelize.sync({ alter: true }) 
  .then(() => {
    console.log("📦 Modelos sincronizados com o banco de dados!");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelos:", err);
  });

const router = AdminExpress.buildRouter(admin);
app.use(admin.options.rootPath, router);

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
