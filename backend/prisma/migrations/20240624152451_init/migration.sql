-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CUSTOMER', 'DENTIST', 'CLINIC_OWNER', 'SYSTEM_ADMIN');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(25) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',
    "first_name" TEXT,
    "last_name" TEXT,
    "email" VARCHAR(255),
    "phone_number" VARCHAR(20),
    "address" VARCHAR(255),
    "date_of_birth" TIMESTAMP(6),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dentist" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "specialization" VARCHAR(255) NOT NULL,
    "certificate" VARCHAR(255)[],
    "isApproved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Dentist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicOwner" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ClinicOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clinic" (
    "id" TEXT NOT NULL,
    "clinic_owner_id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "open_time" INTEGER NOT NULL,
    "close_time" INTEGER NOT NULL,
    "time_slot" INTEGER NOT NULL,
    "image" VARCHAR(255)[],
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "max_patients_per_slot" INTEGER NOT NULL,
    "max_treatments_per_slot" INTEGER NOT NULL,

    CONSTRAINT "Clinic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "clinic_id" TEXT NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "start_time" TIME(6) NOT NULL,
    "total_charge" DOUBLE PRECISION NOT NULL,
    "status" "AppointmentStatus" NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeriodicTreatment" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "dentist_id" TEXT NOT NULL,
    "clinic_id" TEXT NOT NULL,
    "discount_id" TEXT NOT NULL,
    "treatment_type" VARCHAR(255) NOT NULL,
    "start_date" TIMESTAMP(6) NOT NULL,
    "end_date" TIMESTAMP(6) NOT NULL,
    "frequency" INTEGER NOT NULL,
    "charge_per_periodic" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PeriodicTreatment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "dentist_id" TEXT NOT NULL,
    "clinic_id" TEXT NOT NULL,
    "discount_id" TEXT NOT NULL,
    "appointment_id" TEXT,
    "periodic_treatment_id" TEXT,
    "total_charge" DOUBLE PRECISION NOT NULL,
    "payment_status" "PaymentStatus" NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "pertentage" DOUBLE PRECISION NOT NULL,
    "start_date" TIMESTAMP(6) NOT NULL,
    "end_date" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "sent_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemAdmin" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "SystemAdmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentistClinic" (
    "dentist_id" TEXT NOT NULL,
    "clinic_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DentistClinic_pkey" PRIMARY KEY ("dentist_id","clinic_id")
);

-- CreateTable
CREATE TABLE "DentistAppointment" (
    "dentist_id" TEXT NOT NULL,
    "appointment_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DentistAppointment_pkey" PRIMARY KEY ("dentist_id","appointment_id")
);

-- CreateTable
CREATE TABLE "DentistPeriodicTreatment" (
    "dentist_id" TEXT NOT NULL,
    "periodic_treatment_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DentistPeriodicTreatment_pkey" PRIMARY KEY ("dentist_id","periodic_treatment_id")
);

-- CreateTable
CREATE TABLE "ClinicDiscount" (
    "clinic_id" TEXT NOT NULL,
    "discount_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClinicDiscount_pkey" PRIMARY KEY ("clinic_id","discount_id")
);

-- CreateTable
CREATE TABLE "ClinicAppointment" (
    "clinic_id" TEXT NOT NULL,
    "appointment_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClinicAppointment_pkey" PRIMARY KEY ("clinic_id","appointment_id")
);

-- CreateTable
CREATE TABLE "ClinicPeriodicTreatment" (
    "clinic_id" TEXT NOT NULL,
    "periodic_treatment_id" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClinicPeriodicTreatment_pkey" PRIMARY KEY ("clinic_id","periodic_treatment_id")
);

-- CreateTable
CREATE TABLE "_AppointmentToDiscount" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DiscountToInvoice" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DiscountToPeriodicTreatment" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_user_id_key" ON "Customer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Dentist_user_id_key" ON "Dentist"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "ClinicOwner_user_id_key" ON "ClinicOwner"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_clinic_owner_id_key" ON "Clinic"("clinic_owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_appointment_id_key" ON "Invoice"("appointment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_periodic_treatment_id_key" ON "Invoice"("periodic_treatment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_code_key" ON "Discount"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SystemAdmin_user_id_key" ON "SystemAdmin"("user_id");

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
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dentist" ADD CONSTRAINT "Dentist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicOwner" ADD CONSTRAINT "ClinicOwner_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clinic" ADD CONSTRAINT "Clinic_clinic_owner_id_fkey" FOREIGN KEY ("clinic_owner_id") REFERENCES "ClinicOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeriodicTreatment" ADD CONSTRAINT "PeriodicTreatment_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_periodic_treatment_id_fkey" FOREIGN KEY ("periodic_treatment_id") REFERENCES "PeriodicTreatment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemAdmin" ADD CONSTRAINT "SystemAdmin_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistClinic" ADD CONSTRAINT "DentistClinic_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistClinic" ADD CONSTRAINT "DentistClinic_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistAppointment" ADD CONSTRAINT "DentistAppointment_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistAppointment" ADD CONSTRAINT "DentistAppointment_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistPeriodicTreatment" ADD CONSTRAINT "DentistPeriodicTreatment_dentist_id_fkey" FOREIGN KEY ("dentist_id") REFERENCES "Dentist"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentistPeriodicTreatment" ADD CONSTRAINT "DentistPeriodicTreatment_periodic_treatment_id_fkey" FOREIGN KEY ("periodic_treatment_id") REFERENCES "PeriodicTreatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicDiscount" ADD CONSTRAINT "ClinicDiscount_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicDiscount" ADD CONSTRAINT "ClinicDiscount_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "Discount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicAppointment" ADD CONSTRAINT "ClinicAppointment_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicAppointment" ADD CONSTRAINT "ClinicAppointment_appointment_id_fkey" FOREIGN KEY ("appointment_id") REFERENCES "Appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicPeriodicTreatment" ADD CONSTRAINT "ClinicPeriodicTreatment_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicPeriodicTreatment" ADD CONSTRAINT "ClinicPeriodicTreatment_periodic_treatment_id_fkey" FOREIGN KEY ("periodic_treatment_id") REFERENCES "PeriodicTreatment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToDiscount" ADD CONSTRAINT "_AppointmentToDiscount_A_fkey" FOREIGN KEY ("A") REFERENCES "Appointment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AppointmentToDiscount" ADD CONSTRAINT "_AppointmentToDiscount_B_fkey" FOREIGN KEY ("B") REFERENCES "Discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToInvoice" ADD CONSTRAINT "_DiscountToInvoice_A_fkey" FOREIGN KEY ("A") REFERENCES "Discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToInvoice" ADD CONSTRAINT "_DiscountToInvoice_B_fkey" FOREIGN KEY ("B") REFERENCES "Invoice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToPeriodicTreatment" ADD CONSTRAINT "_DiscountToPeriodicTreatment_A_fkey" FOREIGN KEY ("A") REFERENCES "Discount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountToPeriodicTreatment" ADD CONSTRAINT "_DiscountToPeriodicTreatment_B_fkey" FOREIGN KEY ("B") REFERENCES "PeriodicTreatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
