-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_seller_id_fkey`;

-- DropForeignKey
ALTER TABLE `OtherBills` DROP FOREIGN KEY `OtherBills_provider_id_fkey`;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OtherBills` ADD CONSTRAINT `OtherBills_provider_id_fkey` FOREIGN KEY (`provider_id`) REFERENCES `Providers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
