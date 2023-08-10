-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "user" TEXT,
    "contest" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Chat_user_idx" ON "Chat"("user");

-- CreateIndex
CREATE INDEX "Chat_contest_idx" ON "Chat"("contest");

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_contest_fkey" FOREIGN KEY ("contest") REFERENCES "Contest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
