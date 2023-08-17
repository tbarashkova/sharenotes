-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Server version: 10.3.13-MariaDB-log
-- PHP version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactjs`
--

-- --------------------------------------------------------

--
-- Structure of table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` int(11) NOT NULL,
  `text` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data dump of table `notes`
--

INSERT INTO `notes` (`id`, `url`, `timestamp`, `text`, `created_at`, `updated_at`) VALUES
(52, 'ae14w91onlcyr51zyz9p4anp', 1608296880, 'Test note 1', '2023-08-16 13:08:00', '2023-08-16 13:08:00'),
(53, 'vu5p9eym1qvlfz3ycu3y1vw0', 1608296932, 'Test note 2', '2023-08-16 13:08:52', '2023-08-16 13:08:52'),
(54, 'oa6s8kx7nyk1pczt7idoc2kz', 1608296957, 'Test note 3', '2023-08-16 13:09:17', '2023-08-16 13:09:17');
--
-- Index of saved tables
--

--
-- Index of table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for saved tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
