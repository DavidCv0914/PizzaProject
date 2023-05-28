-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2023 a las 23:30:11
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
-- Base de datos: `pizzeria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicional`
--

CREATE TABLE `adicional` (
  `id_adicional` int(11) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `id_pedido3` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `email` varchar(100) NOT NULL,
  `id` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `cellphone` varchar(11) NOT NULL,
  `iconUser` varchar(100) DEFAULT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bebida`
--

CREATE TABLE `bebida` (
  `id_bebida` int(11) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `tamaño` varchar(50) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `id_pedido2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id_lista` int(11) NOT NULL,
  `ingrediente1` varchar(100) DEFAULT NULL,
  `ingrediente2` varchar(100) DEFAULT NULL,
  `ingrediente3` varchar(100) DEFAULT NULL,
  `ingrediente4` varchar(100) DEFAULT NULL,
  `ingrediente5` varchar(100) DEFAULT NULL,
  `ingrediente6` varchar(100) DEFAULT NULL,
  `ingrediente7` varchar(100) DEFAULT NULL,
  `ingrediente8` varchar(100) DEFAULT NULL,
  `ingrediente9` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id_pedido` int(11) NOT NULL,
  `email_profile` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) NOT NULL,
  `estado` varchar(100) DEFAULT 'En espera'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pizza`
--

CREATE TABLE `pizza` (
  `id_pizza` int(11) NOT NULL,
  `tamaño` varchar(50) NOT NULL,
  `precio` int(10) NOT NULL,
  `id_pedido1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profile`
--

CREATE TABLE `profile` (
  `email` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `cellphone` varchar(11) NOT NULL,
  `iconUser` varchar(100) DEFAULT NULL,
  `password` text NOT NULL,
  `codigo` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profile`
--

INSERT INTO `profile` (`email`, `name`, `surname`, `cellphone`, `iconUser`, `password`, `codigo`) VALUES
('alejo@gmail.com', 'qwe', 'qwe', '124', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg', '$2b$10$0l54CuVBOWowP3.YK85Jj.X8DDVQx0TLSkyj0I6pcp2gnJMVCq8ie', 0),
('dabeats2004@gmail.com', 'David', 'Cuellar', '301484511', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg', '$2b$10$rVb6HtNIIewANOkTpFeBSuBWRJplnVfTbG1TvE4tghn38fDIBa3ca', 5646),
('danaeslo2004@gmail.com', 'Danna', 'Estrada', '3508637980', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg', '$2b$10$ju9KsDnWNXlBhJ8nJDfAAuHQn1oqPr5pS70BsGB77kIVSujeHLX1i', 0),
('zed@gmail.com', 'Zed', 'Ryan', '30154487', 'https://res.cloudinary.com/de2sdukuk/image/upload/v1682083366/usericon_eqm409.jpg', '$2b$10$IZrbiYjzGXxNetoIBCCU8uF32qGV0/Jfpmk/oq4Kc9X9.JRM2c0Za', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `receta`
--

CREATE TABLE `receta` (
  `id_pizza1` int(11) DEFAULT NULL,
  `id_recet1` int(11) NOT NULL,
  `id_lista1` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adicional`
--
ALTER TABLE `adicional`
  ADD PRIMARY KEY (`id_adicional`),
  ADD KEY `id_pedido3` (`id_pedido3`);

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `bebida`
--
ALTER TABLE `bebida`
  ADD PRIMARY KEY (`id_bebida`),
  ADD KEY `id_pedido2` (`id_pedido2`);

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id_lista`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id_pedido`),
  ADD KEY `email_profile` (`email_profile`);

--
-- Indices de la tabla `pizza`
--
ALTER TABLE `pizza`
  ADD PRIMARY KEY (`id_pizza`),
  ADD KEY `id_pedido1` (`id_pedido1`);

--
-- Indices de la tabla `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `receta`
--
ALTER TABLE `receta`
  ADD PRIMARY KEY (`id_recet1`),
  ADD KEY `id_pizza1` (`id_pizza1`),
  ADD KEY `id_lista1` (`id_lista1`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adicional`
--
ALTER TABLE `adicional`
  MODIFY `id_adicional` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `bebida`
--
ALTER TABLE `bebida`
  MODIFY `id_bebida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id_lista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `pizza`
--
ALTER TABLE `pizza`
  MODIFY `id_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `receta`
--
ALTER TABLE `receta`
  MODIFY `id_recet1` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adicional`
--
ALTER TABLE `adicional`
  ADD CONSTRAINT `adicional_ibfk_1` FOREIGN KEY (`id_pedido3`) REFERENCES `pedido` (`id_pedido`);

--
-- Filtros para la tabla `bebida`
--
ALTER TABLE `bebida`
  ADD CONSTRAINT `bebida_ibfk_1` FOREIGN KEY (`id_pedido2`) REFERENCES `pedido` (`id_pedido`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`email_profile`) REFERENCES `profile` (`email`);

--
-- Filtros para la tabla `pizza`
--
ALTER TABLE `pizza`
  ADD CONSTRAINT `pizza_ibfk_1` FOREIGN KEY (`id_pedido1`) REFERENCES `pedido` (`id_pedido`);

--
-- Filtros para la tabla `receta`
--
ALTER TABLE `receta`
  ADD CONSTRAINT `receta_ibfk_1` FOREIGN KEY (`id_pizza1`) REFERENCES `pizza` (`id_pizza`),
  ADD CONSTRAINT `receta_ibfk_2` FOREIGN KEY (`id_lista1`) REFERENCES `ingredientes` (`id_lista`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
