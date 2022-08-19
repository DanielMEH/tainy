-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2022 at 07:50 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `conciertos`
--

-- --------------------------------------------------------

--
-- Table structure for table `publicaciones`
--

CREATE TABLE `publicaciones` (
  `idPublic` int(11) NOT NULL,
  `idUsuario` bigint(20) NOT NULL,
  `nombreC` text NOT NULL,
  `artistaC` text NOT NULL,
  `boletasC` bigint(20) NOT NULL,
  `realizacionC` text NOT NULL,
  `precioC` double NOT NULL,
  `fechaC` date NOT NULL,
  `horaC` time NOT NULL,
  `url_image` text NOT NULL,
  `id_image` text NOT NULL,
  `fechaAdd` time NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `publicaciones`
--

INSERT INTO `publicaciones` (`idPublic`, `idUsuario`, `nombreC`, `artistaC`, `boletasC`, `realizacionC`, `precioC`, `fechaC`, `horaC`, `url_image`, `id_image`, `fechaAdd`) VALUES
(1, 68, 'extrellas del mundo', 'reik', 34, 'Armenia', 3000, '2022-08-19', '21:33:00', 'http://res.cloudinary.com/dkqp3wkbi/image/upload/v1660876437/tainy/amhdbybvxxnxyjw2avga.jpg', 'tainy/amhdbybvxxnxyjw2avga', '23:19:26'),
(2, 68, 'mundo', 'romeo', 244, 'Armenia', 2000, '2022-08-26', '23:51:00', 'http://res.cloudinary.com/dkqp3wkbi/image/upload/v1660884721/tainy/zks5gyhwv0wg4meekxrc.jpg', 'tainy/zks5gyhwv0wg4meekxrc', '23:52:01'),
(3, 68, 'la floresta', 'shakira', 33, 'Armenia', 2000, '2022-08-20', '00:11:00', 'http://res.cloudinary.com/dkqp3wkbi/image/upload/v1660885901/tainy/rme7dmupfft2ffwmbeak.jpg', 'tainy/rme7dmupfft2ffwmbeak', '00:11:41'),
(4, 68, 'working', 'rhiana', 22, 'Armenia', 2000, '2022-08-20', '00:25:00', 'http://res.cloudinary.com/dkqp3wkbi/image/upload/v1660886434/tainy/sojd3bckz5yl0zaw4fzo.jpg', 'tainy/sojd3bckz5yl0zaw4fzo', '00:20:34'),
(5, 68, 'slow', 'porta', 99, 'Pereira', 40000, '2022-09-22', '00:26:00', 'http://res.cloudinary.com/dkqp3wkbi/image/upload/v1660886548/tainy/ml3cmap0vrinpp9zc0wd.jpg', 'tainy/ml3cmap0vrinpp9zc0wd', '00:22:28');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `apellido` varchar(120) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `image_id` text DEFAULT NULL,
  `url_image` text DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `name`, `apellido`, `correo`, `password`, `image_id`, `url_image`, `telefono`, `edad`) VALUES
(68, ' tatiana', 'barrera', 'tatiana@gmail.com', '$2b$10$sQ2L.v/V/RfEqy9Ys8YtYecl59ypJwWXdFA2ZHLRqXRUsUpzLygOy', 'tainy/nkkp7lasv7zgxmlbxw5t', 'http://res.cloudinary.com/dkqp3wkbi/image/upload/v1660884308/tainy/nkkp7lasv7zgxmlbxw5t.jpg', 43543545, 17);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`idPublic`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `idPublic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
