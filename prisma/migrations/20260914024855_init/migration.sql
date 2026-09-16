-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'NASABAH') NOT NULL DEFAULT 'NASABAH',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nasabah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_nasabah` VARCHAR(100) NOT NULL,
    `alamat` TEXT NOT NULL,
    `telepon` VARCHAR(20) NOT NULL,
    `saldo_poin` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,
    `foto` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Nasabah_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_unit` VARCHAR(100) NOT NULL,
    `nama_pengelola` VARCHAR(100) NOT NULL,
    `telpon` VARCHAR(20) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Admin_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setoran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nasabahId` INTEGER NOT NULL,
    `adminId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `jumlah` DOUBLE NOT NULL,
    `tanggal` DATE NOT NULL,
    `status` ENUM('PENDING', 'PROCESS', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(100) NOT NULL,
    `harga_perKilo` DOUBLE NOT NULL,
    `poin_perKilo` DOUBLE NOT NULL,
    `jenis_sampaj` ENUM('PLASTIK', 'KERTAS', 'LOGAM', 'KACA', 'ORGANIK') NOT NULL,
    `foto` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailSetoran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `setoranId` INTEGER NOT NULL,
    `kategoriId` INTEGER NOT NULL,
    `berat_kg` DOUBLE NOT NULL,
    `sub_totalPoint` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penukaran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategoriId` INTEGER NOT NULL,
    `hadiahId` INTEGER NOT NULL,
    `poin_terpakai` DOUBLE NOT NULL,
    `sisa_point` DOUBLE NOT NULL,
    `tanggal` DATE NOT NULL,
    `status` ENUM('PENDING', 'PROCESS', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hadiah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_hadiah` VARCHAR(100) NOT NULL,
    `poin_dibutuhkan` DOUBLE NOT NULL,
    `stock` INTEGER NOT NULL,
    `foto` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Nasabah` ADD CONSTRAINT `Nasabah_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Setoran` ADD CONSTRAINT `Setoran_nasabahId_fkey` FOREIGN KEY (`nasabahId`) REFERENCES `Nasabah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Setoran` ADD CONSTRAINT `Setoran_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Setoran` ADD CONSTRAINT `Setoran_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailSetoran` ADD CONSTRAINT `DetailSetoran_setoranId_fkey` FOREIGN KEY (`setoranId`) REFERENCES `Setoran`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetailSetoran` ADD CONSTRAINT `DetailSetoran_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `Kategori`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penukaran` ADD CONSTRAINT `Penukaran_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `Kategori`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penukaran` ADD CONSTRAINT `Penukaran_hadiahId_fkey` FOREIGN KEY (`hadiahId`) REFERENCES `Hadiah`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
