-- CreateTable
CREATE TABLE "HardwareLog" (
    "id" SERIAL NOT NULL,
    "gameTitle" TEXT NOT NULL,
    "reviewText" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "hardwareSpecs" TEXT NOT NULL,
    "averageFps" DOUBLE PRECISION NOT NULL,
    "artwork_url" TEXT,

    CONSTRAINT "HardwareLog_pkey" PRIMARY KEY ("id")
);
