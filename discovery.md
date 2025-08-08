# Discovery - Sistema de Gerenciamento de Concessionária

## 📌 Descrição do Projeto
O sistema será uma aplicação **fullstack** voltada para o gerenciamento de **estoque, vendas, clientes e financiamentos** de veículos novos e seminovos em uma concessionária.  
O objetivo é centralizar as operações da loja em um ambiente digital, facilitando o controle de processos e a tomada de decisões.

O sistema permitirá:
- Controle de entrada e saída de veículos.
- Registro e acompanhamento de vendas.
- Cadastro e gestão de clientes.
- Controle de propostas e contratos de financiamento.
- Relatórios para análise de desempenho.

---

## 🎯 Escopo do Projeto

### Funcionalidades Principais
1. **Gestão de Estoque**
   - Cadastro de veículos (novos e seminovos).
   - Controle de disponibilidade.
   - Registro de informações detalhadas (marca, modelo, ano, quilometragem, cor, valor, etc.).

2. **Gestão de Vendas**
   - Registro de novas vendas.
   - Associação da venda a um cliente e a um veículo.
   - Histórico de transações.

3. **Gestão de Clientes**
   - Cadastro de clientes (PF e PJ).
   - Histórico de compras e financiamentos.
   - Consulta rápida por nome, CPF/CNPJ ou telefone.

4. **Gestão de Financiamentos**
   - Registro de propostas de financiamento.
   - Associação ao cliente e veículo.
   - Controle de status (aprovado, pendente, reprovado).

5. **Relatórios**
   - Estoque disponível.
   - Vendas por período.
   - Financiamentos aprovados/reprovados.
   - Desempenho de vendedores.

---

## 🛠 Requisitos

### Requisitos Funcionais (RF)
- **RF01:** O sistema deve permitir o cadastro, edição e exclusão de veículos.
- **RF02:** O sistema deve permitir o cadastro, edição e exclusão de clientes.
- **RF03:** O sistema deve registrar cada venda associando cliente e veículo.
- **RF04:** O sistema deve registrar propostas de financiamento.
- **RF05:** O sistema deve gerar relatórios filtrados por data, status e categoria.
- **RF06:** O sistema deve permitir login e controle de acesso por tipo de usuário (admin, vendedor).

### Requisitos Não Funcionais (RNF)
- **RNF01:** O sistema deve ser responsivo e acessível em desktop, tablet e smartphone.
- **RNF02:** O backend deve ser desenvolvido em **Node.js com Express**.
- **RNF03:** O frontend deve ser desenvolvido em **React**.
- **RNF04:** O banco de dados deve ser **MySQL**.
- **RNF05:** O sistema deve seguir boas práticas de segurança (criptografia de senhas, sanitização de entradas).
- **RNF06:** O sistema deve permitir integração futura com APIs externas (consulta de crédito, tabelas de valores de veículos).

---

## 🚀 Tecnologias Previstas
- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL
- **Controle de Versão:** Git + GitHub
- **Outros:** Axios, JWT (autenticação), bcrypt (criptografia)

---

## 📅 Entregáveis (MVP)
1. **Cadastro de veículos e clientes.**
2. **Registro de vendas e financiamentos.**
3. **Listagem e filtros para estoque e vendas.**
4. **Sistema de login com níveis de acesso.**
5. **Relatórios básicos.**

---

## 📌 Observações
- O foco inicial será o **MVP** para viabilizar o uso do sistema pela concessionária.
- Funcionalidades adicionais poderão ser implementadas em versões futuras.
