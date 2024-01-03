/*
  Warnings:

  - You are about to drop the column `seller_id` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_seller_id_fkey`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `seller_id`;
