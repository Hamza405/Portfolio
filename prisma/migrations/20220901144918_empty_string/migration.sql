-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL DEFAULT '',
    "projectCodeLink" TEXT NOT NULL DEFAULT '',
    "image1" TEXT NOT NULL,
    "image2" TEXT NOT NULL DEFAULT '',
    "image3" TEXT NOT NULL DEFAULT '',
    "image4" TEXT NOT NULL DEFAULT '',
    "image5" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Project" ("id", "image1", "image2", "image3", "image4", "image5", "projectCodeLink", "projectDescription", "projectLink", "projectName") SELECT "id", "image1", "image2", "image3", "image4", "image5", "projectCodeLink", "projectDescription", "projectLink", "projectName" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
