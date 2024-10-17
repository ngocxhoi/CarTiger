import { prisma } from "../../prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id } = body;

  await prisma.carImage.delete({
    where: {
      id: id,
    },
  });
});
