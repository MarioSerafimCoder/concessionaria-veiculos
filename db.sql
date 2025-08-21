-- Criação do banco
CREATE DATABASE IF NOT EXISTS concessionaria;
USE concessionaria;

-- Tabela: Usuários (Funcionários)
CREATE TABLE usuarios_funcionarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('vendedor', 'gerente', 'mecanico', 'outro') NOT NULL
);

-- Tabela: Clientes
CREATE TABLE registros_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    CPF VARCHAR(14) NOT NULL UNIQUE,
    email VARCHAR(100),
    telefone VARCHAR(20),
    endereco VARCHAR(255),
    id_funcionario INT,
    FOREIGN KEY (id_funcionario) REFERENCES usuarios_funcionarios(id)
        ON DELETE SET NULL
);

-- Tabela: Veículos
CREATE TABLE cadastro_veiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    status ENUM('disponivel', 'vendido', 'em_manutencao') DEFAULT 'disponivel',
    valor DECIMAL(10, 2) NOT NULL,
    id_funcionario INT,
    FOREIGN KEY (id_funcionario) REFERENCES usuarios_funcionarios(id)
        ON DELETE SET NULL
);

-- Tabela: Vendas
CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_veiculo INT NOT NULL,
    id_usuario INT NOT NULL,
    data_venda DATE NOT NULL,
    valor_total DECIMAL(10, 2) NOT NULL,
    forma_pagamento VARCHAR(50),
    FOREIGN KEY (id_cliente) REFERENCES registros_clientes(id)
        ON DELETE CASCADE,
    FOREIGN KEY (id_veiculo) REFERENCES cadastro_veiculo(id)
        ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios_funcionarios(id)
        ON DELETE SET NULL
);
