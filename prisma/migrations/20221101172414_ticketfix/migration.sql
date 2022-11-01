/*
  Warnings:

  - A unique constraint covering the columns `[ticketNr]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticketNr_key" ON "Ticket"("ticketNr");
