import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { id } = query;

  if (!id) createError({ statusCode: 400, statusMessage: "Missing id" });

  const data = await prisma.carListing.findUnique({
    where: {
      id: id as string,
    },
    include: {
      carImage: true,
    },
  });
  return data;
});
