-- CreateEnum
CREATE TYPE "HistoryContestTypeType" AS ENUM ('NBA_OVER_UNDER', 'NFL_OVER_UNDER', 'NFL_ATS');

-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "display" TEXT NOT NULL DEFAULT E'',
    "contestType" "HistoryContestTypeType" NOT NULL,
    "year" INTEGER NOT NULL,
    "user" TEXT,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "History_user_idx" ON "History"("user");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
