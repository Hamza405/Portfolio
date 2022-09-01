-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skillName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "basic" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectName" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL
);
