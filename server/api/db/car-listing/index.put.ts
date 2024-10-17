import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, data, features } = body;

  const carListing = await prisma.carListing.update({
    where: {
      id: id,
    },
    data: {
      ...data,
      features: JSON.stringify(features),
    },
  });

  return carListing.id;
});
