/*
  Warnings:

  - Added the required column `status` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarea` ADD COLUMN `status` VARCHAR(2) NOT NULL;
