/*
  Warnings:

  - You are about to drop the column `bill_id` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_bill_id_fkey`;

-- AlterTable
ALTER TABLE `Order` DROP COLUMN `bill_id`;
