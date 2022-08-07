-- AlterTable
ALTER TABLE "Contest" ADD COLUMN     "winner" TEXT;

-- CreateIndex
CREATE INDEX "Contest_winner_idx" ON "Contest"("winner");

-- AddForeignKey
ALTER TABLE "Contest" ADD CONSTRAINT "Contest_winner_fkey" FOREIGN KEY ("winner") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
