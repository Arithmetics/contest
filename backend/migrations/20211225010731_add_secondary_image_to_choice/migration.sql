-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "secondaryImage" TEXT;

-- CreateIndex
CREATE INDEX "Choice_secondaryImage_idx" ON "Choice"("secondaryImage");

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_secondaryImage_fkey" FOREIGN KEY ("secondaryImage") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
