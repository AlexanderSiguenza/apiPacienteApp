-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-05-2023 a las 10:05:00
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `clinica`
--

CREATE DATABASE clinica; 
USE clinica;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `edad` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `nombre`, `apellido`, `edad`, `direccion`, `telefono`) VALUES
(1, 'Sofía', 'Hernández', 24, 'Calle 1 #123', '1234567890'),
(2, 'Luis', 'González', 42, 'Calle 2 #456', '2345678901'),
(3, 'Ana', 'Pérez', 31, 'Calle 3 #789', '3456789012'),
(4, 'Juan', 'Martínez', 54, 'Calle 4 #012', '4567890123'),
(5, 'María', 'Rodríguez', 19, 'Calle 5 #345', '5678901234'),
(6, 'José', 'García', 48, 'Calle 6 #678', '6789012345'),
(7, 'Luna', 'Fernández', 26, 'Calle 7 #901', '7890123456'),
(8, 'Miguel', 'Sánchez', 36, 'Calle 8 #234', '8901234567'),
(9, 'Lucía', 'López', 29, 'Calle 9 #567', '9012345678'),
(10, 'David', 'Gómez', 33, 'Calle 10 #890', '0123456789'),
(11, 'Laura', 'Díaz', 39, 'Calle 11 #1234', '1234567890'),
(12, 'Carlos', 'Vázquez', 22, 'Calle 12 #5678', '2345678901'),
(13, 'Isabel', 'Ruiz', 51, 'Calle 13 #9012', '3456789012'),
(14, 'Pedro', 'Castro', 44, 'Calle 14 #3456', '4567890123'),
(15, 'Fabiola', 'Herrera', 28, 'Calle 15 #7890', '5678901234'),
(16, 'Jorge', 'Navarro', 45, 'Calle 16 #1234', '6789012345'),
(17, 'Sara', 'Jiménez', 20, 'Calle 17 #5678', '7890123456'),
(18, 'Alejandro', 'Ramírez', 38, 'Calle 18 #9012', '8901234567'),
(19, 'Silvia', 'Torres', 49, 'Calle 19 #3456', '9012345678'),
(20, 'Diego', 'Reyes', 27, 'Calle 20 #7890', '0123456789'),
(21, 'Natalia', 'Luna', 35, 'Calle 21 #1234', '1234567890'),
(22, 'Hugo', 'Ramos', 30, 'Calle 22 #5678', '2345678901'),
(23, 'Adriana', 'Flores', 41, 'Calle 23 #9012', '3456789012'),
(24, 'Óscar', 'Juárez', 50, 'Calle 24 #3456', '4567890123'),
(25, 'Ana', 'Lara', 23, 'Calle 25 #7890', '5678901234'),
(26, 'Fernando', 'Mendoza', 47, 'Calle 26 #1234', '6789012345'),
(27, 'Gloria', 'Duran', 32, 'Calle 27 #5678', '7890123456'),
(28, 'Juan', 'Pérez', 30, 'Calle 1, 23456, Madrid', '911234567'),
(29, 'María', 'López', 25, 'Avenida 2, 45678, Barcelona', '932345678'),
(30, 'Pedro', 'Martínez', 40, 'Plaza 3, 67890, Valencia', '963456789'),
(31, 'Ana', 'Gómez', 35, 'Calle 4, 78901, Sevilla', '954567890'),
(32, 'Luis', 'Sánchez', 20, 'Avenida 5, 89012, Zaragoza', '976567890'),
(33, 'Carmen', 'Rodríguez', 25, 'Plaza 6, 90123, Málaga', '952567890'),
(34, 'José', 'Díaz', 40, 'Calle 7, 01234, Córdoba', '957567890'),
(35, 'Laura', 'Hernández', 35, 'Avenida 8, 12345, Granada', '958567890'),
(36, 'David', 'Muñoz', 20, 'Plaza 9, 23456, Almería', '950567890'),
(37, 'Paula', 'Cáceres', 25, 'Calle 10, 34567, Cádiz', '956567890'),
(38, 'Antonio', 'Moreno', 40, 'Avenida 11, 45678, Huelva', '959567890'),
(39, 'Beatriz', 'Navarro', 35, 'Plaza 12, 56789, Jaén', '953567890');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
