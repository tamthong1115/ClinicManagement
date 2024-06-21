/*
  Warnings:

  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone_number` to the `Clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_phone_key";

-- AlterTable
ALTER TABLE "Clinic" ADD COLUMN     "phone_number" VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "phone_number" VARCHAR(20);

-- AlterTable
ALTER TABLE "Dentist" ADD COLUMN     "phone_number" VARCHAR(20);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone",
ADD COLUMN     "username" VARCHAR(25) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
