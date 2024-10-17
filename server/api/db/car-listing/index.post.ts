import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { data, features, author, authorName, authorImage } = body;

  const carListing = await prisma.carListing.create({
    data: {
      ...data,
      features: JSON.stringify(features),
      author: author,
      authorName: authorName ? authorName : undefined,
      authorImage: authorImage ? authorImage : undefined,
    },
  });

  return carListing.id;
});
