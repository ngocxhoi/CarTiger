-- CreateTable
CREATE TABLE "CarListing" (
    "id" TEXT NOT NULL,
    "listingTitle" TEXT NOT NULL,
    "tagline" TEXT,
    "originalPrice" INTEGER,
    "sellingPrice" INTEGER NOT NULL,
    "categories" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "driveType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "mileage" INTEGER NOT NULL,
    "engineSize" INTEGER,
    "cylinder" INTEGER,
    "color" TEXT NOT NULL,
    "doorType" TEXT NOT NULL,
    "vin" TEXT,
    "offerType" TEXT,
    "listingDescription" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "author" TEXT NOT NULL,
    "authorName" TEXT NOT NULL DEFAULT 'NgocxHoi',
    "authorImageUrl" TEXT NOT NULL DEFAULT 'https://i.pravatar.cc/150?img=3',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarImage" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT,
    "carListingId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CarImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarImage" ADD CONSTRAINT "CarImage_carListingId_fkey" FOREIGN KEY ("carListingId") REFERENCES "CarListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
