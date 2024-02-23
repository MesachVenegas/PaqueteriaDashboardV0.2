-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NULL,
    `username` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('user', 'admin') NULL DEFAULT 'user',
    `registered_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `id` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NULL DEFAULT '/assets/default-avatar.png',
    `name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `type` ENUM('wholesaler', 'minors') NOT NULL DEFAULT 'minors',
    `register_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Client_email_key`(`email`),
    UNIQUE INDEX `Client_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Providers` (
    `id` VARCHAR(191) NOT NULL,
    `avatar_url` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `registed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Providers_email_key`(`email`),
    UNIQUE INDEX `Providers_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `client_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `addressed_name` VARCHAR(191) NOT NULL,
    `pkg_long` DOUBLE NOT NULL,
    `pkg_width` DOUBLE NOT NULL,
    `pkg_height` DOUBLE NOT NULL,
    `pkg_weight` DOUBLE NOT NULL,
    `type` ENUM('land', 'air') NOT NULL,
    `total` DOUBLE NOT NULL,
    `payment_type` ENUM('cash', 'card', 'transfer', 'partial') NOT NULL DEFAULT 'cash',
    `is_complete` BOOLEAN NOT NULL DEFAULT false,
    `is_cancelled` BOOLEAN NOT NULL DEFAULT false,
    `registed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Outlay` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `provider_id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `mount` DOUBLE NOT NULL,
    `pieces` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `delivery_type` VARCHAR(191) NOT NULL,
    `cost` DOUBLE NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductsInOrder` (
    `id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NULL,
    `quanty` INTEGER NOT NULL DEFAULT 1,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentCashByOrder` (
    `id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `money_500` DOUBLE NULL,
    `money_200` DOUBLE NULL,
    `money_100` DOUBLE NULL,
    `money_50` DOUBLE NULL,
    `money_20` DOUBLE NULL,
    `coin_20` DOUBLE NULL,
    `coin_10` DOUBLE NULL,
    `coin_5` DOUBLE NULL,
    `coin_2` DOUBLE NULL,
    `coin_1` DOUBLE NULL,
    `coin_50` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Outlay` ADD CONSTRAINT `Outlay_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Outlay` ADD CONSTRAINT `Outlay_provider_id_fkey` FOREIGN KEY (`provider_id`) REFERENCES `Providers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsInOrder` ADD CONSTRAINT `ProductsInOrder_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductsInOrder` ADD CONSTRAINT `ProductsInOrder_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PaymentCashByOrder` ADD CONSTRAINT `PaymentCashByOrder_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
