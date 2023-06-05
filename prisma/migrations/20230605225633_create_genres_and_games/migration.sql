-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "generoID" TEXT NOT NULL,
    CONSTRAINT "Game_generoID_fkey" FOREIGN KEY ("generoID") REFERENCES "Genre" ("genero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genre" (
    "genero" TEXT NOT NULL PRIMARY KEY
);
