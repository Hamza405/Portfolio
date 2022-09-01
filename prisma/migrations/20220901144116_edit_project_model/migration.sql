/*
  Warnings:

  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Skill` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `image1` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image3` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image4` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image5` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectCodeLink` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "skillName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "basic" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Skill" ("basic", "id", "image", "skillName") SELECT "basic", "id", "image", "skillName" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectLink" TEXT,
    "projectCodeLink" TEXT,
    "image1" TEXT NOT NULL,
    "image2" TEXT,
    "image3" TEXT,
    "image4" TEXT,
    "image5" TEXT
);
INSERT INTO "new_Project" ("id", "projectDescription", "projectLink", "projectName") SELECT "id", "projectDescription", "projectLink", "projectName" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
