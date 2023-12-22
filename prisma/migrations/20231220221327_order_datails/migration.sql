/*
  Warnings:

  - You are about to drop the column `addresses` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `is_complete` on the `Order` table. All the data in the column will be lost.
  - Added the required column `addresse_city` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_colony` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_number` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_phone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_reference` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_state` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_street` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addresse_zip` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `package_height` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `package_length` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `package_weight` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `package_width` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `addresses`,
    DROP COLUMN `is_complete`,
    ADD COLUMN `addresse_city` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_colony` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_reference` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_state` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_street` VARCHAR(191) NOT NULL,
    ADD COLUMN `addresse_zip` VARCHAR(191) NOT NULL,
    ADD COLUMN `package_height` DOUBLE NOT NULL,
    ADD COLUMN `package_length` DOUBLE NOT NULL,
    ADD COLUMN `package_weight` DOUBLE NOT NULL,
    ADD COLUMN `package_width` DOUBLE NOT NULL;
