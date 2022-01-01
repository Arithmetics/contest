-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE INDEX "Choice_image_idx" ON "Choice"("image");

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_image_fkey" FOREIGN KEY ("image") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
