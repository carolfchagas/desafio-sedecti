-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Dez-2020 às 12:49
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `desafio_sedecti`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_data`
--

CREATE TABLE `user_data` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `age` int(2) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user_data`
--

INSERT INTO `user_data` (`user_id`, `fullname`, `age`, `gender`, `adress`, `cpf`) VALUES
(1, 'Ana Carolina Freitas das Chagas', 19, 'F', 'Conjunto Huascar Angelin, Rua Amadeus,  n 11', '04359884257'),
(2, 'Maria da Silva', 30, 'F', 'Rua fulano de tal, Bairro 22', '54518223365');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `user_data`
--
ALTER TABLE `user_data`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
