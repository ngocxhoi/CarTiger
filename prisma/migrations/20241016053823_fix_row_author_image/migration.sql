/*
  Warnings:

  - You are about to drop the column `authorImageUrl` on the `CarListing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CarListing" DROP COLUMN "authorImageUrl",
ADD COLUMN     "authorImage" TEXT NOT NULL DEFAULT 'https://i.pravatar.cc/150?img=3';
