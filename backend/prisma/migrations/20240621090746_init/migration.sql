-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'DENTIST', 'CLINIC_OWNER', 'SYSTEM_ADMIN');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "address" VARCHAR(255),
    "date_of_birth" TIMESTAMP(6),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Dentist" (
    "dentist_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "specialization" VARCHAR(255) NOT NULL,
    "certificate" VARCHAR(255)[],
    "isApproved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Dentist_pkey" PRIMARY KEY ("dentist_id")
);

-- CreateTable
CREATE TABLE "Clinic" (
    "clinic_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "open_time" TIME(6) NOT NULL,
    "close_time" TIME(6) NOT NULL,
    "time_slot" INTEGER NOT NULL,
    "image" VARCHAR(255)[],
    "max_patients_per_slot" INTEGER NOT NULL,
    "max_treatments_per_slot" INTEGER NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("clinic_id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "appointment_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "dentist_id" INTEGER NOT NULL,
    "clinic_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "start_time" TIME(6) NOT NULL,
    "total_charge" DOUBLE PRECISION NOT NULL,
    "status" "AppointmentStatus" NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointment_id")
);

-- CreateTable
CREATE TABLE "PeriodicTreatment" (
    "periodic_treatment_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "dentist_id" INTEGER NOT NULL,
    "clinic_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,
    "treatment_type" VARCHAR(255) NOT NULL,
    "start_date" TIMESTAMP(6) NOT NULL,
    "end_date" TIMESTAMP(6) NOT NULL,
    "frequency" INTEGER NOT NULL,
    "charge_per_periodic" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PeriodicTreatment_pkey" PRIMARY KEY ("periodic_treatment_id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "invoice_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "dentist_id" INTEGER NOT NULL,
    "clinic_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,
    "appointment_id" INTEGER,
    "periodic_treatment_id" INTEGER,
    "total_charge" DOUBLE PRECISION NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("invoice_id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "discount_id" SERIAL NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "pertentage" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(6) NOT NULL,
    "end_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("discount_id")
);

-- CreateTable
CREATE TABLE "Message" (
    "message_id" SERIAL NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "sent_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("message_id")
);

-- CreateTable
CREATE TABLE "SystemAdmin" (
    "admin_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "SystemAdmin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "_ClinicToDentist" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ClinicToDiscount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AppointmentToDiscount" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DiscountToInvoice" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_DiscountToPeriodicTreatment" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_user_id_key" ON "Customer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Dentist_user_id_key" ON "Dentist"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_user_id_key" ON "Clinic"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_appointment_id_key" ON "Invoice"("appointment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_periodic_treatment_id_key" ON "Invoice"("periodic_treatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_code_key" ON "Discount"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SystemAdmin_user_id_key" ON "SystemAdmin"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ClinicToDentist_AB_unique" ON "_ClinicToDentist"("A", "B");

-- CreateIndex
CREATE INDEX "_ClinicToDentist_B_index" ON "_ClinicToDentist"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClinicToDiscount_AB_unique" ON "_ClinicToDiscount"("A", "B");

-- CreateIndex
CREATE INDEX "_ClinicToDiscount_B_index" ON "_ClinicToDiscount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AppointmentToDiscount_AB_unique" ON "_AppointmentToDiscount"("A", "B");

-- CreateIndex
CREATE INDEX "_AppointmentToDiscount_B_index" ON "_AppointmentToDiscount"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountToInvoice_AB_unique" ON "_DiscountToInvoice"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscountToInvoice_B_index" ON "_DiscountToInvoice"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountToPeriodicTreatment_AB_unique" ON "_DiscountToPeriodicTreatment"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscountToPeriodicTreatment_B_index" ON "_DiscountToPeriodicTreatment"("B");

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
