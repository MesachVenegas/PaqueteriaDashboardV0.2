/*
  Warnings:

  - You are about to drop the column `coin15` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `coin15`,
    ADD COLUMN `coin5` DOUBLE NOT NULL DEFAULT 0;
