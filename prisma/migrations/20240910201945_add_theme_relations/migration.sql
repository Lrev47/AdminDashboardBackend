-- AlterTable
ALTER TABLE "User" ADD COLUMN     "darkThemeId" TEXT,
ADD COLUMN     "lightThemeId" TEXT;

-- CreateTable
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "primary" TEXT,
    "primaryLight" TEXT,
    "greyMain" TEXT,
    "greyLight" TEXT,
    "greyDark" TEXT,
    "greenAccent" TEXT,
    "redAccent" TEXT,
    "blueAccent" TEXT,
    "background" TEXT,
    "text" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Theme_name_key" ON "Theme"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_darkThemeId_fkey" FOREIGN KEY ("darkThemeId") REFERENCES "Theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lightThemeId_fkey" FOREIGN KEY ("lightThemeId") REFERENCES "Theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;
