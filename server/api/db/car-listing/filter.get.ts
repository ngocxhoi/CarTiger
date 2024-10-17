import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  try {
    const data = await prisma.carListing.findMany({
      where: {
        categories: query.category ? String(query.category) : undefined,
        condition: String(query.condition),
        make: String(query.make),
        sellingPrice: {
          lte: Number(query.sellingPrice),
        },
      },
      include: {
        carImage: true,
      },
    });
    return data;
  } catch (error: any) {
    throw createError(error);
  }
});
