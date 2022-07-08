/*
  Warnings:

  - Added the required column `correo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `correo` VARCHAR(180) NOT NULL,
    ADD COLUMN `password` VARCHAR(190) NOT NULL;
