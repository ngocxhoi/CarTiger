import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const data = await prisma.carListing.findMany({
    where: {
      ...query,
    },
    include: {
      carImage: true,
    },
  });
  return data;
});
