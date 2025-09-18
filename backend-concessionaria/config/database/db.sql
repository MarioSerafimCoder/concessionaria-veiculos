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

-- Inserindo funcionários
INSERT INTO usuarios_funcionarios (nome, email, senha, tipo) VALUES
('João Silva', 'joao.silva@concessionaria.com', '123456', 'vendedor'),
('Maria Souza', 'maria.souza@concessionaria.com', '123456', 'gerente'),
('Carlos Pereira', 'carlos.pereira@concessionaria.com', '123456', 'mecanico'),
('Ana Lima', 'ana.lima@concessionaria.com', '123456', 'vendedor');

-- Inserindo clientes
INSERT INTO registros_clientes (nome, CPF, email, telefone, endereco, id_funcionario) VALUES
('Pedro Gomes', '123.456.789-01', 'pedro.gomes@gmail.com', '(85) 99999-1111', 'Rua das Flores, 123 - Fortaleza', 1),
('Fernanda Costa', '987.654.321-00', 'fernanda.costa@gmail.com', '(85) 98888-2222', 'Av. Central, 456 - Fortaleza', 4),
('Lucas Andrade', '456.789.123-55', 'lucas.andrade@gmail.com', '(85) 97777-3333', 'Rua Verde, 789 - Caucaia', 1),
('Juliana Torres', '321.654.987-44', 'juliana.torres@gmail.com', '(85) 96666-4444', 'Rua Azul, 321 - Maracanaú', 4);

-- Inserindo veículos
INSERT INTO cadastro_veiculo (modelo, ano, placa, status, valor, id_funcionario) VALUES
('Toyota Corolla', 2020, 'ABC-1234', 'disponivel', 95000.00, 1),
('Honda Civic', 2019, 'XYZ-5678', 'vendido', 88000.00, 1),
('Chevrolet Onix', 2021, 'DEF-4321', 'disponivel', 75000.00, 4),
('Ford Ranger', 2018, 'GHI-8765', 'em_manutencao', 120000.00, 3),
('Fiat Argo', 2022, 'JKL-1122', 'vendido', 68000.00, 4);

-- Inserindo vendas
INSERT INTO vendas (id_cliente, id_veiculo, id_usuario, data_venda, valor_total, forma_pagamento) VALUES
(1, 2, 1, '2023-05-10', 88000.00, 'Cartão de Crédito'),
(2, 5, 4, '2023-06-20', 68000.00, 'Boleto Bancário');

