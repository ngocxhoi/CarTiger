import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { take } = query;

  const data = await prisma.carListing.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      carImage: true,
    },
    take: take ? Number(take) : undefined,
  });

  return data;
});
