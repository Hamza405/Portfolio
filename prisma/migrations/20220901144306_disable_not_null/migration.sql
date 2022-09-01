/*
  Warnings:

  - Made the column `image2` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image3` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image4` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image5` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `projectCodeLink` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `projectLink` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,
    "projectCodeLink" TEXT NOT NULL,
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL,
    "image3" TEXT NOT NULL,
    "image4" TEXT NOT NULL,
    "image5" TEXT NOT NULL
);
INSERT INTO "new_Project" ("id", "image1", "image2", "image3", "image4", "image5", "projectCodeLink", "projectDescription", "projectLink", "projectName") SELECT "id", "image1", "image2", "image3", "image4", "image5", "projectCodeLink", "projectDescription", "projectLink", "projectName" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
