/*
  Warnings:

  - The primary key for the `Appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Clinic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Dentist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Discount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PeriodicTreatment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SystemAdmin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[discount_id]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_dentist_id_fkey";

-- DropForeignKey
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Dentist" DROP CONSTRAINT "Dentist_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_appointment_id_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_dentist_id_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_periodic_treatment_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_sender_id_fkey";

-- DropForeignKey
ALTER TABLE "PeriodicTreatment" DROP CONSTRAINT "PeriodicTreatment_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "PeriodicTreatment" DROP CONSTRAINT "PeriodicTreatment_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "PeriodicTreatment" DROP CONSTRAINT "PeriodicTreatment_dentist_id_fkey";

-- DropForeignKey
ALTER TABLE "SystemAdmin" DROP CONSTRAINT "SystemAdmin_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToDiscount" DROP CONSTRAINT "_AppointmentToDiscount_A_fkey";

-- DropForeignKey
ALTER TABLE "_AppointmentToDiscount" DROP CONSTRAINT "_AppointmentToDiscount_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClinicToDentist" DROP CONSTRAINT "_ClinicToDentist_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClinicToDentist" DROP CONSTRAINT "_ClinicToDentist_B_fkey";

-- DropForeignKey
ALTER TABLE "_ClinicToDiscount" DROP CONSTRAINT "_ClinicToDiscount_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClinicToDiscount" DROP CONSTRAINT "_ClinicToDiscount_B_fkey";

-- DropForeignKey
ALTER TABLE "_DiscountToInvoice" DROP CONSTRAINT "_DiscountToInvoice_A_fkey";

-- DropForeignKey
ALTER TABLE "_DiscountToInvoice" DROP CONSTRAINT "_DiscountToInvoice_B_fkey";

-- DropForeignKey
ALTER TABLE "_DiscountToPeriodicTreatment" DROP CONSTRAINT "_DiscountToPeriodicTreatment_A_fkey";

-- DropForeignKey
ALTER TABLE "_DiscountToPeriodicTreatment" DROP CONSTRAINT "_DiscountToPeriodicTreatment_B_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_pkey",
ALTER COLUMN "appointment_id" DROP DEFAULT,
ALTER COLUMN "appointment_id" SET DATA TYPE TEXT,
ALTER COLUMN "customer_id" SET DATA TYPE TEXT,
ALTER COLUMN "dentist_id" SET DATA TYPE TEXT,
ALTER COLUMN "clinic_id" SET DATA TYPE TEXT,
ALTER COLUMN "discount_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointment_id");
DROP SEQUENCE "Appointment_appointment_id_seq";

-- AlterTable
ALTER TABLE "Clinic" DROP CONSTRAINT "Clinic_pkey",
ALTER COLUMN "clinic_id" DROP DEFAULT,
ALTER COLUMN "clinic_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "discount_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Clinic_pkey" PRIMARY KEY ("clinic_id");
DROP SEQUENCE "Clinic_clinic_id_seq";

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
ALTER COLUMN "customer_id" DROP DEFAULT,
ALTER COLUMN "customer_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id");
DROP SEQUENCE "Customer_customer_id_seq";

-- AlterTable
ALTER TABLE "Dentist" DROP CONSTRAINT "Dentist_pkey",
ALTER COLUMN "dentist_id" DROP DEFAULT,
ALTER COLUMN "dentist_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dentist_pkey" PRIMARY KEY ("dentist_id");
DROP SEQUENCE "Dentist_dentist_id_seq";

-- AlterTable
ALTER TABLE "Discount" DROP CONSTRAINT "Discount_pkey",
ALTER COLUMN "discount_id" DROP DEFAULT,
ALTER COLUMN "discount_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Discount_pkey" PRIMARY KEY ("discount_id");
DROP SEQUENCE "Discount_discount_id_seq";

-- AlterTable
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_pkey",
ALTER COLUMN "invoice_id" DROP DEFAULT,
ALTER COLUMN "invoice_id" SET DATA TYPE TEXT,
ALTER COLUMN "customer_id" SET DATA TYPE TEXT,
ALTER COLUMN "dentist_id" SET DATA TYPE TEXT,
ALTER COLUMN "clinic_id" SET DATA TYPE TEXT,
ALTER COLUMN "discount_id" SET DATA TYPE TEXT,
ALTER COLUMN "appointment_id" SET DATA TYPE TEXT,
ALTER COLUMN "periodic_treatment_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY ("invoice_id");
DROP SEQUENCE "Invoice_invoice_id_seq";

-- AlterTable
ALTER TABLE "Message" DROP CONSTRAINT "Message_pkey",
ALTER COLUMN "message_id" DROP DEFAULT,
ALTER COLUMN "message_id" SET DATA TYPE TEXT,
ALTER COLUMN "sender_id" SET DATA TYPE TEXT,
ALTER COLUMN "receiver_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id");
DROP SEQUENCE "Message_message_id_seq";

-- AlterTable
ALTER TABLE "PeriodicTreatment" DROP CONSTRAINT "PeriodicTreatment_pkey",
ALTER COLUMN "periodic_treatment_id" DROP DEFAULT,
ALTER COLUMN "periodic_treatment_id" SET DATA TYPE TEXT,
ALTER COLUMN "customer_id" SET DATA TYPE TEXT,
ALTER COLUMN "dentist_id" SET DATA TYPE TEXT,
ALTER COLUMN "clinic_id" SET DATA TYPE TEXT,
ALTER COLUMN "discount_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "PeriodicTreatment_pkey" PRIMARY KEY ("periodic_treatment_id");
DROP SEQUENCE "PeriodicTreatment_periodic_treatment_id_seq";

-- AlterTable
ALTER TABLE "SystemAdmin" DROP CONSTRAINT "SystemAdmin_pkey",
ALTER COLUMN "admin_id" DROP DEFAULT,
ALTER COLUMN "admin_id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SystemAdmin_pkey" PRIMARY KEY ("admin_id");
DROP SEQUENCE "SystemAdmin_admin_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "user_id" DROP DEFAULT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("user_id");
DROP SEQUENCE "User_user_id_seq";

-- AlterTable
ALTER TABLE "_AppointmentToDiscount" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_ClinicToDentist" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_ClinicToDiscount" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_DiscountToInvoice" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_DiscountToPeriodicTreatment" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_discount_id_key" ON "Clinic"("discount_id");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dentist" ADD CONSTRAINT "Dentist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinic" ADD CONSTRAINT "Clinic_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("dentist_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("clinic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeriodicTreatment" ADD CONSTRAINT "PeriodicTreatment_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeriodicTreatment" ADD CONSTRAINT "PeriodicTreatment_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("dentist_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeriodicTreatment" ADD CONSTRAINT "PeriodicTreatment_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("clinic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("dentist_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("clinic_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("appointment_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_periodic_treatment_id_fkey" FOREIGN KEY ("periodic_treatment_id") REFERENCES "PeriodicTreatment"("periodic_treatment_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemAdmin" ADD CONSTRAINT "SystemAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicToDentist" ADD CONSTRAINT "_ClinicToDentist_A_fkey" FOREIGN KEY ("A") REFERENCES "Clinic"("clinic_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicToDentist" ADD CONSTRAINT "_ClinicToDentist_B_fkey" FOREIGN KEY ("B") REFERENCES "Dentist"("dentist_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicToDiscount" ADD CONSTRAINT "_ClinicToDiscount_A_fkey" FOREIGN KEY ("A") REFERENCES "Clinic"("clinic_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClinicToDiscount" ADD CONSTRAINT "_ClinicToDiscount_B_fkey" FOREIGN KEY ("B") REFERENCES "Discount"("discount_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToDiscount" ADD CONSTRAINT "_AppointmentToDiscount_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment"("appointment_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToDiscount" ADD CONSTRAINT "_AppointmentToDiscount_B_fkey" FOREIGN KEY ("B") REFERENCES "Discount"("discount_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToInvoice" ADD CONSTRAINT "_DiscountToInvoice_A_fkey" FOREIGN KEY ("A") REFERENCES "Discount"("discount_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToInvoice" ADD CONSTRAINT "_DiscountToInvoice_B_fkey" FOREIGN KEY ("B") REFERENCES "Invoice"("invoice_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToPeriodicTreatment" ADD CONSTRAINT "_DiscountToPeriodicTreatment_A_fkey" FOREIGN KEY ("A") REFERENCES "Discount"("discount_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToPeriodicTreatment" ADD CONSTRAINT "_DiscountToPeriodicTreatment_B_fkey" FOREIGN KEY ("B") REFERENCES "PeriodicTreatment"("periodic_treatment_id") ON DELETE CASCADE ON UPDATE CASCADE;
