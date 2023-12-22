/*
  Warnings:

  - You are about to drop the column `addresse_city` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_colony` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_name` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_number` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_phone` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_reference` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_state` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_street` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `addresse_zip` on the `Order` table. All the data in the column will be lost.
  - Added the required column `addressed_city` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_colony` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_number` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_phone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_reference` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_state` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_street` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressed_zip` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Order` DROP COLUMN `addresse_city`,
    DROP COLUMN `addresse_colony`,
    DROP COLUMN `addresse_name`,
    DROP COLUMN `addresse_number`,
    DROP COLUMN `addresse_phone`,
    DROP COLUMN `addresse_reference`,
    DROP COLUMN `addresse_state`,
    DROP COLUMN `addresse_street`,
    DROP COLUMN `addresse_zip`,
    ADD COLUMN `addressed_city` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_colony` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_reference` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_state` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_street` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressed_zip` VARCHAR(191) NOT NULL;
