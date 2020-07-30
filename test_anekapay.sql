-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2020 at 04:28 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_anekapay`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id_type` int(5) NOT NULL,
  `type_name` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_type`, `type_name`, `status`) VALUES
(1, 'M3', 'AKTIF'),
(2, 'TELKOMSEL', 'AKTIF'),
(3, 'XL', 'NON-AKTIF'),
(4, 'AXIS', 'NON-AKTIF'),
(5, 'BY.U ', 'AKTIF');

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_product` int(5) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `stock` int(100) NOT NULL,
  `price` int(100) NOT NULL,
  `id_type` int(5) NOT NULL,
  `added_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_product`, `product_name`, `description`, `stock`, `price`, `id_type`, `added_at`, `updated_at`, `status`) VALUES
(1, 'Kuota 5 GB', 'tanpa dibagi-bagi waktu', 4, 500000, 1, '0000-00-00', '0000-00-00', 'DIHAPUS'),
(2, 'Pulsa M3 5000', 'masa aktif bertambah 7 hari', 7, 65000, 1, '0000-00-00', '2020-06-27', 'ADA'),
(3, 'Kuota 2 GB', 'tanpa dibagi-bagi waktu', 7, 50000, 1, '0000-00-00', '0000-00-00', 'ADA'),
(4, 'Kuota 5 GB', 'tanpa dibagi-bagi waktu', 7, 50000, 2, '2020-06-27', '2020-06-27', 'ADA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_type`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_type` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_product` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
