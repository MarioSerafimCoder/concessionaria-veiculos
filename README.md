# Discovery do Projeto – Sistema de Gerenciamento de Vendas de Veículos

## Nome do Projeto
Sistema de Gerenciamento de Vendas de Veículos

## Time
- Isabele Mororó  
- Mário Serafim

## Visão Geral
O projeto tem como objetivo desenvolver uma aplicação fullstack voltada para o gerenciamento de **estoque, vendas, clientes e financiamentos de veículos novos e seminovos** em uma concessionária.

O sistema centralizará todas as operações de venda em um ambiente digital, tornando mais fácil o controle do estoque, o acompanhamento de clientes e vendas, e a gestão de financiamentos, além de permitir a tomada de decisões estratégicas de forma rápida e eficiente.

### Com ele será possível:
- Cadastrar e gerenciar veículos disponíveis para venda (novos e seminovos).  
- Controlar a disponibilidade de veículos em estoque.  
- Cadastrar e acompanhar clientes (PF e PJ).  
- Registrar vendas de veículos associadas a clientes.  
- Gerenciar propostas e contratos de financiamento.  
- Emitir relatórios de vendas, estoque e desempenho da equipe de vendas.

## Problema a Ser Resolvido
Concessionárias de pequeno e médio porte enfrentam dificuldades em organizar seus processos de **venda de veículos** de forma centralizada, resultando em:
- Falhas no controle do estoque de veículos.  
- Perda ou duplicidade de informações de clientes.  
- Demora no acompanhamento de vendas e financiamentos.  
- Dificuldade em gerar relatórios precisos de desempenho da equipe.

## Público-Alvo
- Concessionárias de veículos novos e seminovos.  
- Vendedores de automóveis.  
- Gestores de vendas e estoque de concessionárias.

## Funcionalidades Mínimas do MVP

### Usuário (Vendedor/Admin):
- Cadastro/Login com diferentes níveis de acesso.  
- Cadastro e edição de veículos disponíveis para venda.  
- Controle de disponibilidade e estoque de veículos.  
- Cadastro e acompanhamento de clientes (PF e PJ).  
- Registro de vendas de veículos.  
- Registro de propostas de financiamento associadas às vendas.  
- Relatórios básicos de vendas, estoque e financiamentos.

### Admin (Gestor):
- CRUD completo de veículos (novos e seminovos).  
- CRUD de clientes.  
- CRUD de vendedores/usuários do sistema.  
- Gestão de financiamentos e status (aprovado, pendente, reprovado).  
- Relatórios detalhados de vendas, estoque e desempenho da equipe de vendas.

## Stack de Tecnologias
| Camada | Tecnologia |  
|--------|------------|  
| Backend | Node.js + Express |  
| Frontend | React.js + Vite + Bootstrap |  
| Banco | MySQL |  
| ORM | Prisma ORM |  
| Documentação | Markdown e Swagger |  
| Gerenciamento | GitHub Projects |    

## Entregáveis
| Entregável | Status |  
|------------|--------|  
| Discovery do Projeto | ✅ |  
| Gerenciamento das Tarefas | 🔲 |  
| Protótipo de telas (opcional) | 🔲 |  
| Implementação Frontend | 🔲 |  
| API em Node.js | 🔲 |  
| Documentação dos Endpoints | 🔲 |  
| Desenho do Banco de Dados | 🔲 |  
| Testes automatizados dos endpoints | 🔲 |  
| Testes unitários (50%) | 🔲 |  
| Repositório público no GitHub | ✅ |  
| Apresentação final | 🔲 |



```mermaid
erDiagram

    REGISTROS_CLIENTES {
        int id
        string nome
        string CPF
        string email
        string telefone
        string endereco
    }

    CADASTRO_VEICULO {
        int id
        string modelo
        int ano
        string placa
        string status
        float valor
    }

    VENDAS {
        int id
        int id_cliente
        int id_veiculo
        date data_venda
        float valor_total
        string forma_pagamento
    }

        USUARIOS_FUNCIONARIOS {
        int id
        string nome
        string email
        string senha
        string tipo
    }

    %% RELACIONAMENTOS
    USUARIOS_FUNCIONARIOS ||--o{ VENDAS : realiza
    USUARIOS_FUNCIONARIOS ||--o{ REGISTROS_CLIENTES : realiza
    USUARIOS_FUNCIONARIOS ||--o{ CADASTRO_VEICULOS : realiza
    CADASTRO_VEICULO ||--o{ VENDAS : vendido_em


```
