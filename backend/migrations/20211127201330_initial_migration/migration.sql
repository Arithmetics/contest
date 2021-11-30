-- CreateEnum
CREATE TYPE "ChoiceSelectionType" AS ENUM ('OVER', 'UNDER', 'AWAY', 'HOME');

-- CreateEnum
CREATE TYPE "ContestStatusType" AS ENUM ('OPEN', 'IN_PROGRESS', 'COMPLETE');

-- CreateEnum
CREATE TYPE "ContestContestTypeType" AS ENUM ('NBA_OVER_UNDER', 'NFL_OVER_UNDER', 'NFL_ATS');

-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL,
    "user" TEXT,
    "choice" TEXT,
    "isSuper" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" TEXT NOT NULL,
    "selection" "ChoiceSelectionType" NOT NULL,
    "isWin" BOOLEAN NOT NULL DEFAULT false,
    "line" TEXT,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CloudImage" (
    "id" TEXT NOT NULL,
    "image" JSONB,
    "altText" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "CloudImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "description" TEXT NOT NULL DEFAULT E'',
    "status" "ContestStatusType" NOT NULL DEFAULT E'OPEN',
    "entryFee" INTEGER,
    "contestType" "ContestContestTypeType" NOT NULL,
    "image" TEXT,
    "ruleSet" TEXT,

    CONSTRAINT "Contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Line" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT E'',
    "closingTime" TIMESTAMP(3) NOT NULL,
    "benchmark" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "contest" TEXT,

    CONSTRAINT "Line_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registration" (
    "id" TEXT NOT NULL,
    "hasPaid" BOOLEAN NOT NULL DEFAULT false,
    "contest" TEXT,
    "user" TEXT,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuleSet" (
    "id" TEXT NOT NULL,
    "maxBets" INTEGER,
    "maxSuperBets" INTEGER,
    "superBetPointCount" INTEGER,

    CONSTRAINT "RuleSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Standing" (
    "id" TEXT NOT NULL,
    "gamesPlayed" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "totalGames" INTEGER NOT NULL,
    "line" TEXT,

    CONSTRAINT "Standing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL DEFAULT E'',
    "name" TEXT NOT NULL DEFAULT E'',
    "userName" TEXT NOT NULL DEFAULT E'',
    "password" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "avatarImage" TEXT,
    "passwordResetToken" TEXT,
    "passwordResetIssuedAt" TIMESTAMP(3),
    "passwordResetRedeemedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Bet_user_idx" ON "Bet"("user");

-- CreateIndex
CREATE INDEX "Bet_choice_idx" ON "Bet"("choice");

-- CreateIndex
CREATE INDEX "Choice_line_idx" ON "Choice"("line");

-- CreateIndex
CREATE UNIQUE INDEX "Contest_ruleSet_key" ON "Contest"("ruleSet");

-- CreateIndex
CREATE INDEX "Contest_image_idx" ON "Contest"("image");

-- CreateIndex
CREATE INDEX "Line_image_idx" ON "Line"("image");

-- CreateIndex
CREATE INDEX "Line_contest_idx" ON "Line"("contest");

-- CreateIndex
CREATE INDEX "Registration_contest_idx" ON "Registration"("contest");

-- CreateIndex
CREATE INDEX "Registration_user_idx" ON "Registration"("user");

-- CreateIndex
CREATE INDEX "Standing_line_idx" ON "Standing"("line");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE INDEX "User_avatarImage_idx" ON "User"("avatarImage");

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_choice_fkey" FOREIGN KEY ("choice") REFERENCES "Choice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_line_fkey" FOREIGN KEY ("line") REFERENCES "Line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contest" ADD CONSTRAINT "Contest_image_fkey" FOREIGN KEY ("image") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contest" ADD CONSTRAINT "Contest_ruleSet_fkey" FOREIGN KEY ("ruleSet") REFERENCES "RuleSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_image_fkey" FOREIGN KEY ("image") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Line" ADD CONSTRAINT "Line_contest_fkey" FOREIGN KEY ("contest") REFERENCES "Contest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_contest_fkey" FOREIGN KEY ("contest") REFERENCES "Contest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Standing" ADD CONSTRAINT "Standing_line_fkey" FOREIGN KEY ("line") REFERENCES "Line"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatarImage_fkey" FOREIGN KEY ("avatarImage") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
